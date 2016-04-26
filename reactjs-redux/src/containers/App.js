import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addCounter, removeCounter, increment, decrement } from '../actions';
import Counter from '../components/Counter'

class App extends Component {
  render() {
    const { counters, addCounter, removeCounter, increment, decrement } = this.props;
    return (
      <div>
        <button onClick={addCounter}>Add</button>
        {counters.map(counter =>
          <Counter
            key={counter.id}
            counter={counter}
            removeCounter={removeCounter}
            increment={increment}
            decrement={decrement}
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
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    counters: state
  };
}

export default connect(
  mapStateToProps,
  { addCounter, removeCounter, increment, decrement }
)(App);
