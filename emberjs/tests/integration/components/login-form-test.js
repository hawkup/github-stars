import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const { RSVP } = Ember;

moduleForComponent('login-form', 'Integration | Component | login form', {
  integration: true
});

test('should render login button', function(assert) {
  assert.expect(1);

  this.render(hbs`{{login-form}}`);

  assert.equal(this.$().text().trim(), 'Login with Github');
});

test('should render loading... when waiting respond after click login', function(assert) {
  assert.expect(1);

  const sessionStub = Ember.Service.extend({
    authenticate() {
      return new RSVP.Promise(() => {});
    }
  });
  this.register('service:session', sessionStub);
  this.inject.service('session', { as: 'session' });

  this.render(hbs`{{login-form}}`);

  this.$('a').click();

  assert.equal(this.$().text().trim(), 'loading...');
});

test('should not render loading... after responded', function(assert) {
  assert.expect(1);

  const sessionStub = Ember.Service.extend({
    authenticate() {
      return new RSVP.Promise((resolve) => {
        resolve();
      });
    }
  });
  this.register('service:session', sessionStub);
  this.inject.service('session', { as: 'session' });

  this.render(hbs`{{login-form}}`);

  this.$('a').click();

  assert.equal(this.$().text().trim(), 'Login with Github');
});
