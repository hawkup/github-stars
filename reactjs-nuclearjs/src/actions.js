import { ADD_COUNTER, REMOVE_COUNTER } from './actionTypes';

let nextCounter = 0;
export const addCounter = (reactor) => {
  reactor.dispatch(ADD_COUNTER, { id: nextCounter++ });
};

export const removeCounter = (reactor, id) => {
  reactor.dispatch(REMOVE_COUNTER, { id });
};
