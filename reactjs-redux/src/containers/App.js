import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { onIncrement, onDecrement } from '../actions';
import Counter from '../components/Counter'

class App extends Component {
  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <Counter
        value={value}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    );
  }
}

App.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    value: state
  };
}

export default connect(
  mapStateToProps,
  { onIncrement, onDecrement }
)(App);
