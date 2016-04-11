import Ember from 'ember';
import DS from 'ember-data';

const { inject: { service }, RSVP } = Ember;

export default DS.Adapter.extend({
  ajax: service('ajax'),

  query(store, type, login) {
    const ajax = this.get('ajax');
    return new RSVP.Promise((resolve, reject) => {
      ajax.request(`https://api.github.com/users/${login}/starred`, {
        type: 'GET',
        crossDomain: true,
        dataType: 'json'
      }).then((response) => {
        resolve(response);
      }, () => {
        reject();
      });
    });
  }
});
