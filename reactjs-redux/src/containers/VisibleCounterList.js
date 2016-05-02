import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { addCounter, removeCounter, increment, decrement } from '../actions';
import CounterList from '../components/CounterList';

const getVisibilityFilter = (state) => state.visibilityFilter;
const getCounters = (state) => state.counters;

const getVisibleCounters = createSelector(
  [ getCounters, getVisibilityFilter ],
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

const mapStateToProps = (state) => {
  return {
    counters: getVisibleCounters(state)
  };
}

const VisibleCounterList = connect(
  mapStateToProps,
  { addCounter, removeCounter, increment, decrement }
)(CounterList);

export default VisibleCounterList;
