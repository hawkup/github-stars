import {
  ADD_COUNTER,
  REMOVE_COUNTER,
  INCREMENT,
  DECREMENT
} from '../constants/ActionTypes'

const counter = (state, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        id: action.id,
        count: 0
      }
    case INCREMENT:
      if (state.id !== action.id) {
        return state
      }

      return {
        id: action.id,
        count: state.count + 1
      }
    case DECREMENT:
      if (state.id !== action.id) {
        return state
      }

      return {
        id: action.id,
        count: state.count - 1
      }
    default:
      return state
  }
}

const counters = (state = [], action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return [
        ...state,
        counter(undefined, action)
      ]
    case INCREMENT:
    case DECREMENT:
      return state.map(c =>
        counter(c, action)
      )
    case REMOVE_COUNTER:
      return state.filter(c =>
        c.id != action.id
      )
    default:
      return state
  }
}

export default counters
