import { connect } from 'react-redux';
import { addCounter, removeCounter, increment, decrement } from '../actions';
import CounterList from '../components/CounterList';

const getVisibleCounter = (counters, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return counters;
    case 'SHOW_ODD':
      return counters.filter(c => c.count % 2 === 1);
    case 'SHOW_EVEN':
      return counters.filter(c => c.count % 2 === 0);
  }
}

const mapStateToProps = (state) => {
  return {
    counters: getVisibleCounter(state.counters, state.visibilityFilter)
  };
}

const VisibleCounterList = connect(
  mapStateToProps,
  { addCounter, removeCounter, increment, decrement }
)(CounterList);

export default VisibleCounterList;
