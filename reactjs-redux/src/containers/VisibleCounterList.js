import { connect } from 'react-redux';
import { addCounter, removeCounter, increment, decrement } from '../actions';
import CounterList from '../components/CounterList'

const mapStateToProps = (state) => {
  return {
    counters: state.counters
  };
}

const VisibleCounterList = connect(
  mapStateToProps,
  { addCounter, removeCounter, increment, decrement }
)(CounterList);

export default VisibleCounterList;
