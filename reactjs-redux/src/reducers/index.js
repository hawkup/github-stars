import {
  ADD_COUNTER,
  REMOVE_COUNTER,
  INCREMENT,
  DECREMENT
} from '../constants/ActionTypes';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const counter = (state, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        id: action.id,
        count: 0
      };
    case INCREMENT:
      if (state.id !== action.id) {
        return state;
      }

      return {
        id: action.id,
        count: state.count + 1
      };
    case DECREMENT:
      if (state.id !== action.id) {
        return state;
      }

      return {
        id: action.id,
        count: state.count - 1
      };
    default:
      return state;
  }
}

export const counters = (state = [], action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return [
        ...state,
        counter(undefined, action)
      ];
    case INCREMENT:
    case DECREMENT:
      return state.map(c =>
        counter(c, action)
      );
    case REMOVE_COUNTER:
      return state.filter(c =>
        c.id != action.id
      )
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counters,
  routing: routerReducer
});

export default rootReducer;
