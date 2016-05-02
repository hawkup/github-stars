import * as types from '../constants/ActionTypes'

let nextCounter = 0
export const addCounter = () => {
  return {
    type: types.ADD_COUNTER,
    id: nextCounter++
  }
}

export const removeCounter = (id) => {
  return {
    type: types.REMOVE_COUNTER,
    id
  }
}

export const increment = (id) => {
  return {
    type: types.INCREMENT,
    id
  }
}

export const decrement = (id) => {
  return {
    type: types.DECREMENT,
    id
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  }
}
