import * as types from '../constants/ActionTypes';

export const onIncrement = () => {
  return {
    type: types.INCREMENT
  };
}

export const onDecrement = () => {
  return {
    type: types.DECREMENT
  };
}
