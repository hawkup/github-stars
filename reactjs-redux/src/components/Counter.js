import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  render() {
    const { counter, removeCounter, onIncrement, onDecrement } = this.props;
    return (
      <p>
        Clicked: {counter.count} times
        {' '}
        <button onClick={() => onIncrement(counter.id)}>
          +
        </button>
        <button onClick={() => onDecrement(counter.id)}>
          -
        </button>
        <button onClick={() => removeCounter(counter.id)}>
          Remove
        </button>
      </p>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.object.isRequired,
  removeCounter: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default Counter;
