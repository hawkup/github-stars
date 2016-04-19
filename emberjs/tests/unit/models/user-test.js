import { moduleForModel, test } from 'ember-qunit';

moduleForModel('user', 'Unit | Model | user', {
  needs: []
});

test('it has an attribute: login', function(assert) {
  let model = this.subject();
  let hasAttr = Object.keys(model.toJSON()).indexOf('login') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: name', function(assert) {
  let model = this.subject();
  let hasAttr = Object.keys(model.toJSON()).indexOf('name') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: avatar_url', function(assert) {
  let model = this.subject();
  let hasAttr = Object.keys(model.toJSON()).indexOf('avatar_url') > -1;
  assert.ok(hasAttr);
});
