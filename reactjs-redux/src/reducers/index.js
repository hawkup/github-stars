import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counters from './counters';

const rootReducer = combineReducers({
  counters,
  routing: routerReducer
});

export default rootReducer;
