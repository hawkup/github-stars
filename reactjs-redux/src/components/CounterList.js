import React, { Component, PropTypes } from 'react'
import Counter from './Counter'
import Filter from '../containers/Filter'

class CounterList extends Component {
  render() {
    const { counters, addCounter, removeCounter, increment, decrement } = this.props
    return (
      <div>
        <Filter filter="SHOW_ALL">all</Filter>
        {' '}
        <Filter filter="SHOW_ODD">Show odd</Filter>
        {' '}
        <Filter filter="SHOW_EVEN">Show even</Filter>
        {' '}
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
    )
  }
}

CounterList.propTypes = {
  counters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired
  }).isRequired).isRequired,
  addCounter: PropTypes.func.isRequired,
  removeCounter: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

export default CounterList
