import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../../components/Counter';

function setup(counter = { id: 0, count: 0 }) {
  const actions = {
    removeCounter: expect.createSpy(),
    increment: expect.createSpy(),
    decrement: expect.createSpy(),
  };

  const component = shallow(
    <Counter counter={counter} {...actions} />
  );

  return {
    component,
    actions,
    p: component.find('p'),
    span: component.find('span'),
    btnIncrement: component.find('button').at(0),
    btnDecrement: component.find('button').at(1),
    btnRemove: component.find('button').at(2),
  };
}

describe('Counter component', () => {
  it('initial render', () => {
    const { p, span, btnIncrement, btnDecrement, btnRemove } = setup();

    expect(p).toExist();
    expect(span.text()).toBe('Clicked: 0 times');
    expect(btnIncrement.text()).toBe('+');
    expect(btnDecrement.text()).toBe('-');
    expect(btnRemove.text()).toBe('Remove');
  });

  it('should increase count when click + button', () => {
    const { btnIncrement, actions } = setup();
    btnIncrement.simulate('click');
    expect(actions.increment).toHaveBeenCalledWith(0);
  });

  it('should decrease count when click - button', () => {
    const { btnDecrement, actions } = setup();
    btnDecrement.simulate('click');
    expect(actions.decrement).toHaveBeenCalledWith(0);
  });

  it('should remove counter when click Remove button', () => {
    const { btnRemove, actions } = setup();
    btnRemove.simulate('click');
    expect(actions.removeCounter).toHaveBeenCalledWith(0);
  });
});
