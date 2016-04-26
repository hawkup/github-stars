import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addCounter, removeCounter, onIncrement, onDecrement } from '../actions';
import Counter from '../components/Counter'

class App extends Component {
  render() {
    const { counters, addCounter, removeCounter, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <button onClick={addCounter}>Add</button>
        {counters.map(counter =>
          <Counter
            key={counter.id}
            counter={counter}
            removeCounter={removeCounter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        )}
      </div>
    );
  }
}

App.propTypes = {
  counters: PropTypes.array.isRequired,
  addCounter: PropTypes.func.isRequired,
  removeCounter: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    counters: state
  };
}

export default connect(
  mapStateToProps,
  { addCounter, removeCounter, onIncrement, onDecrement }
)(App);
