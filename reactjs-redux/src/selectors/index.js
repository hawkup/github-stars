import { createSelector } from 'reselect';

const getVisibilityFilter = (state) => state.visibilityFilter;
const getCounters = (state) => state.counters;

export const getVisibleCounters = createSelector(
  [getCounters, getVisibilityFilter],
  (counters, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return counters;
      case 'SHOW_ODD':
        return counters.filter(c => c.count % 2 === 1);
      case 'SHOW_EVEN':
        return counters.filter(c => c.count % 2 === 0);
      default:
        return counters;
    }
  }
);
