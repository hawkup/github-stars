import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counters from './counters';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  counters,
  visibilityFilter,
  routing: routerReducer
});

export default rootReducer;
