import { moduleFor, test } from 'ember-qunit';
import sinon from 'sinon';

const token = '123456789abcdefghijklmnopq';
const userData = JSON.stringify({"login":"hawkup","id":2748846,"avatar_url":"https://avatars.githubusercontent.com/u/2748846?v=3","gravatar_id":"","url":"https://api.github.com/users/hawkup","html_url":"https://github.com/hawkup","followers_url":"https://api.github.com/users/hawkup/followers","following_url":"https://api.github.com/users/hawkup/following{/other_user}","gists_url":"https://api.github.com/users/hawkup/gists{/gist_id}","starred_url":"https://api.github.com/users/hawkup/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/hawkup/subscriptions","organizations_url":"https://api.github.com/users/hawkup/orgs","repos_url":"https://api.github.com/users/hawkup/repos","events_url":"https://api.github.com/users/hawkup/events{/privacy}","received_events_url":"https://api.github.com/users/hawkup/received_events","type":"User","site_admin":false,"name":null,"company":null,"blog":null,"location":null,"email":null,"hireable":null,"bio":null,"public_repos":23,"public_gists":51,"followers":7,"following":0,"created_at":"2012-11-08T06:52:46Z","updated_at":"2016-04-01T22:24:06Z"});
const userURL = `https://api.github.com/user?access_token=${token}`;
const notAuth = JSON.stringify({"message": "Requires authentication","documentation_url": "https://developer.github.com/v3"});
const notAuthURL = 'https://api.github.com/user?access_token=';

moduleFor('adapter:user', 'Unit | Adapter | user', {
  needs: ['service:ajax'],
  beforeEach() {
    this.server = sinon.fakeServer.create();
  },
  afterEach() {
    this.server.restore();
  }
});

test('it should return data when get success', function(assert) {
  let adapter = this.subject();
  this.server.respondWith('GET', userURL,
    [200, {'Content-Type': 'application/json'},
      userData]);
  adapter.findRecord(null, null, token).then((response) => {
    assert.ok(response);
  });
  assert.ok(adapter);
  this.server.respond();
});

test('it should return error data when get not found', function(assert) {
  let adapter = this.subject();
  this.server.respondWith('GET', notAuthURL,
    [401, {'Content-Type': 'application/json'},
      notAuth]);
  adapter.findRecord(null, null, '').catch((error) => {
    assert.equal(error.message, 'Ajax authorization failed');
  });
  this.server.respond();
});
