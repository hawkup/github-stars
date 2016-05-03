import * as types from '../constants/ActionTypes';

let nextCounter = 0;
export const addCounter = () => ({
  type: types.ADD_COUNTER,
  id: nextCounter++,
});

export const removeCounter = (id) => ({
  type: types.REMOVE_COUNTER,
  id,
});

export const increment = (id) => ({
  type: types.INCREMENT,
  id,
});

export const decrement = (id) => ({
  type: types.DECREMENT,
  id,
});

export const setVisibilityFilter = (filter) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter,
});
