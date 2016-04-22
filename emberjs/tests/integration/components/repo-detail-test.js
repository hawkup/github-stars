import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('repo-detail', 'Integration | Component | repo detail', {
  integration: true
});

test('should display name, full_name, html_url, description', function(assert) {
  assert.expect(4);

  this.set('name', 'github-stars');
  this.set('full_name', 'hawkup/github-stars');
  this.set('html_url', 'https://github.com/hawkup/github-stars');
  this.set('description', 'Github stars app with js frameworks');

  this.render(hbs`{{repo-detail name=name full_name=full_name html_url=html_url description=description}}`);

  assert.equal(this.$('h3').text().trim(), 'github-stars');
  assert.equal(this.$('a').text().trim(), 'hawkup/github-stars');
  assert.equal(this.$('a').attr('href').trim(), 'https://github.com/hawkup/github-stars');
  assert.equal(this.$('p').text().trim(), 'Github stars app with js frameworks');
});
