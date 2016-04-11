import Ember from 'ember';
const RepoDetailComponent = Ember.Component.extend({});

RepoDetailComponent.reopenClass({
  positionalParams: ['name', 'full_name', 'html_url', 'description']
});

export default RepoDetailComponent;
