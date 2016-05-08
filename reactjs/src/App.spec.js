import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

function setup() {
  const component = shallow(
    <App />
  );

  return {
    h1: component.find('h1'),
    Counter: component.find('Component'),
  };
}

describe('App component', () => {
  it('should display header', () => {
    const { h1 } = setup();
    expect(h1.text()).toBe('Hello ReactJS');
  });

  it('should display Counter component', () => {
    const { Counter } = setup();
    expect(Counter).toExist();
  });
});
