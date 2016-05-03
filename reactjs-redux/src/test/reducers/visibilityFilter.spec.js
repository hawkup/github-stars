import expect from 'expect';
import visibilityFilter from '../../reducers/visibilityFilter';

describe('visibilityFilter reducer', () => {
  it('should handle SET_VISIBILITY_FILTER', () => {
    expect(
      visibilityFilter(undefined, {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ODD',
      })
    ).toEqual(
      'SHOW_ODD'
    );

    expect(
      visibilityFilter('SHOW_EVEN', {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ALL',
      })
    ).toEqual(
      'SHOW_ALL'
    );
  });
});
