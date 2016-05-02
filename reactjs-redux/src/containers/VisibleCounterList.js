import { connect } from 'react-redux';
import { getVisibleCounters } from '../selectors';
import { addCounter, removeCounter, increment, decrement } from '../actions';
import CounterList from '../components/CounterList';

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
