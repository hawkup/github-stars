import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import counters from '../reducers';

const middleware = process.env.NODE_ENV === 'production' ?
  [] :
  [logger()];

const store = createStore(
  counters,
  applyMiddleware(...middleware)
);

export default store;
