import { Store, toImmutable } from 'nuclear-js';
import { ADD_COUNTER, REMOVE_COUNTER } from '../actionTypes';

const initialState = toImmutable([]);

function addCounter(state, { id }) {
  return state.push({ id });
}

function removeCounter(state, { id }) {
  return state.filter(c => c.id !== id);
}

export default new Store({
  getInitialState() {
    return initialState;
  },

  initialize() {
    this.on(ADD_COUNTER, addCounter);
    this.on(REMOVE_COUNTER, removeCounter);
  },
});
