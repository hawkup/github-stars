import { moduleForModel, test } from 'ember-qunit';

moduleForModel('repo', 'Unit | Model | repo', {
  needs: []
});

test('it has an attribute: name', function(assert) {
  let model = this.subject();
  let hasAttr = Object.keys(model.toJSON()).indexOf('name') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: full_name', function(assert) {
  let model = this.subject();
  let hasAttr = Object.keys(model.toJSON()).indexOf('full_name') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: html_url', function(assert) {
  let model = this.subject();
  let hasAttr = Object.keys(model.toJSON()).indexOf('html_url') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: description', function(assert) {
  let model = this.subject();
  let hasAttr = Object.keys(model.toJSON()).indexOf('description') > -1;
  assert.ok(hasAttr);
});
