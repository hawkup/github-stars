import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
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

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch({ type: 'INCREMENT' });
    },
    onDecrement: () => {
      dispatch({ type: 'DECREMENT' });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
