import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

function setup() {
  const component = shallow(
    <Counter />
  );

  return {
    h2: component.find('h2'),
  };
}

describe('Counter component', () => {
  it('should display counter text', () => {
    const { h2 } = setup();
    expect(h2.text()).toBe('Counter: 0');
  });
});
