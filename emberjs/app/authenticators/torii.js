import Ember from 'ember';
import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';
import config from '../config/environment';

const { service } = Ember.inject;

export default ToriiAuthenticator.extend({
  torii: service(),
  ajax: service(),

  authenticate() {
    const ajax = this.get('ajax');

    return this._super(...arguments).then((data) => {
      return ajax.request(config.torii.providers['github-oauth2'].accTokenServerUri, {
        type: 'POST',
        crossDomain: true,
        dataType: 'json',
        data: {
          code: data.authorizationCode
        }
      }).then((response) => {
        return {
          access_token: response.access_token,
          provider: data.provider
        };
      });
    });
  }
});
