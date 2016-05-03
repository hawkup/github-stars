import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';

@observer
// eslint-disable-next-line react/prefer-stateless-function
class Counter extends Component {
  render() {
    return (
      <h2>Counter: {this.props.appState.counter}</h2>
    );
  }
}

Counter.propTypes = {
  appState: PropTypes.object.isRequired,
};

export default Counter;
