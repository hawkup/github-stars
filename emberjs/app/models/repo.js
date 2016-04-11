import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  name:  attr('string'),
  full_name: attr('string'),
  html_url: attr('string'),
  description: attr('string')
});
