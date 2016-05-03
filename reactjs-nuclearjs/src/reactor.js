import { Reactor } from 'nuclear-js';
import * as stores from './stores';

const reactor = new Reactor({ debug: true });

reactor.registerStores(stores);

if (module.hot) {
  // eslint-disable-next-line global-require
  const store = require('./stores').default;
  module.hot.accept('./stores', () => {
    reactor.replaceStores(store);
  });
}

export default reactor;
