import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  login: attr('string'),
  name:  attr('string'),
  avatar_url: attr('string')
});
