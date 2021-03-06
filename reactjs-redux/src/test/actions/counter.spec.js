import expect from 'expect';
import * as types from '../../constants/ActionTypes';
import * as actions from '../../actions';

describe('counter actions', () => {
  it('addCounter should create ADD_COUNTER action', () => {
    expect(actions.addCounter()).toEqual({
      type: types.ADD_COUNTER,
      id: 0,
    });
  });

  it('removeCounter should create REMOVE_COUNTER action', () => {
    expect(actions.removeCounter(3)).toEqual({
      type: types.REMOVE_COUNTER,
      id: 3,
    });
  });

  it('increment should create INCREMENT action', () => {
    expect(actions.increment(6)).toEqual({
      type: types.INCREMENT,
      id: 6,
    });
  });

  it('decrement should create DECREMENT action', () => {
    expect(actions.decrement(10)).toEqual({
      type: types.DECREMENT,
      id: 10,
    });
  });

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('SHOW_ALL')).toEqual({
      type: types.SET_VISIBILITY_FILTER,
      filter: 'SHOW_ALL',
    });
  });
});
