import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div>
        <span>Counter: {this.state.counter}</span>
        <button onClick={this.props.removeCounter}>remove</button>
      </div>
    );
  }
}

Counter.propTypes = {
  removeCounter: PropTypes.func.isRequired,
};

export default Counter;
