import React, { Component } from 'react';
import { connect } from 'nuclear-js-react-addons';
import * as actions from '../actions';
import Counter from '../components/Counter';

@connect(() => ({
  counters: ['counters'],
}))
// eslint-disable-next-line react/prefer-stateless-function
class CounterList extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { reactor, counters } = this.props;
    return (
      <div>
        {
          counters.map(counter =>
            <Counter
              key={counter.id}
              removeCounter={() => actions.removeCounter(reactor, counter.id)}
            />
          )
        }
        <button onClick={() => actions.addCounter(reactor)}>Add</button>
      </div>
    );
  }
}

export default CounterList;
