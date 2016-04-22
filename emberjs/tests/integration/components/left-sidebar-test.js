import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const sessionAccountStub = Ember.Service.extend({
  user: {
    avatar_url: 'https://avatars.githubusercontent.com/u/2748846?v=3',
    login: 'hawkup'
  }
});

moduleForComponent('left-sidebar', 'Integration | Component | left sidebar', {
  integration: true,

  beforeEach() {
    this.register('service:session-account', sessionAccountStub);
    this.inject.service('session-account', { as: 'sessionAccount' });
  }
});

test('should render login and avatar_url from session account', function(assert) {
  assert.expect(2);

  this.render(hbs`{{left-sidebar}}`);

  assert.equal(this.$('img').attr('src').trim(), 'https://avatars.githubusercontent.com/u/2748846?v=3');

  assert.equal(this.$('h2').text().trim(), 'hawkup');
});
