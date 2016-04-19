import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

const { RSVP } = Ember;

moduleFor('service:session-account', 'Unit | Service | session account', {});

test('it should resolved when loadCurrentUser with invalid token', function(assert) {
  let service = this.subject({
    session: { data: { authenticated: { access_token: null}}}
  });
  service.loadCurrentUser().then(() => {
    assert.ok(true, 'resolve');
  });
});

test('it should resolved when loadCurrentUser with valid token and can get user', function(assert) {
  let service = this.subject({
    session: { data: { authenticated: { access_token: 'token'}}},
    store: {
      find() {
        var mockedModel = Ember.Object.create({
          'login': 'hawkup'
        });
        return new RSVP.Promise((resolve) => {
          resolve(mockedModel);
        });
      }
    }
  });
  service.loadCurrentUser().then(() => {
    assert.ok(true, 'resolve');
  });
});

test('it should resolved when loadCurrentUser with valid token and can not get user', function(assert) {
  let service = this.subject({
    session: { data: { authenticated: { access_token: 'token'}}},
    store: {
      find() {
        return new RSVP.Promise((resolve, reject) => {
          reject();
        });
      }
    }
  });
  service.loadCurrentUser().catch(() => {
    assert.ok(true, 'reject');
  });
});
