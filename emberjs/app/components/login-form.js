import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),

  actions: {
    authenticateWithGithub() {
      this.set('loading', true);
      this.get('session').authenticate('authenticator:torii', 'github').then(() => {
        this.set('loading', false);
      });
    }
  }
});
