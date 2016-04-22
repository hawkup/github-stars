import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('navigation-bar', 'Integration | Component | navigation bar', {
  integration: true
});

test('should display username and logout button when logged-in', function(assert) {
  assert.expect(2);

  const sessionStub = Ember.Service.extend({
    isAuthenticated: true
  });
  const sessionAccountStub = Ember.Service.extend({
    user: {
      login: 'hawkup'
    }
  });
  this.register('service:session', sessionStub);
  this.inject.service('session', { as: 'session' });
  this.register('service:session-account', sessionAccountStub);
  this.inject.service('session-account', { as: 'sessionAccount' });

  this.render(hbs`{{navigation-bar}}`);

  assert.equal(this.$('span').text().trim(), 'hawkup');
  assert.equal(this.$('a').text().trim(), 'Logout');
});

test('should display login button when user not logged-in', function(assert) {
  assert.expect(1);

  const sessionStub = Ember.Service.extend({
    isAuthenticated: false
  });
  this.register('service:session', sessionStub);
  this.inject.service('session', { as: 'session' });

  this.render(hbs`{{navigation-bar}}`);

  assert.equal(this.$('a').text().trim(), 'Login');
});

test('should call onLogin action when click login button', function(assert) {
  assert.expect(1);

  this.set('externalAction', () => {
      assert.ok(true);
  });

  this.render(hbs`{{navigation-bar onLogin=(action externalAction)}}`);

  this.$('a').click();
});

test('should call invalidate session when click logout button', function(assert) {
  assert.expect(1);

  const sessionStub = Ember.Service.extend({
    isAuthenticated: true,
    invalidate() {
      assert.ok(true);
    }
  });
  this.register('service:session', sessionStub);
  this.inject.service('session', { as: 'session' });

  this.render(hbs`{{navigation-bar}}`);

  this.$('a').click();
});
