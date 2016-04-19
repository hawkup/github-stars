import Ember from 'ember';
import DS from 'ember-data';

const { inject: { service }, RSVP } = Ember;

export default DS.Adapter.extend({
  ajax: service('ajax'),

  findRecord(store, type, access_token) {
    const ajax = this.get('ajax');
    return new RSVP.Promise((resolve, reject) => {
      ajax.request('https://api.github.com/user', {
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        data: {
          access_token
        }
      }).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  }
});
