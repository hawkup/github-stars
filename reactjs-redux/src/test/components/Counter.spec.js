import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Counter from '../../components/Counter';

function setup() {
  const props = {
    counter: {
      id: 0,
      count: 0
    },
    removeCounter: expect.createSpy(),
    increment: expect.createSpy(),
    decrement: expect.createSpy()
  };
  const renderer = TestUtils.createRenderer();
  renderer.render(<Counter {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Counter component', () => {
  it('initial render', () => {
    const { output } = setup();

    expect(output.type).toBe('p');

    const [ span, btnIncrement, btnDecrement, btnRemove ] = output.props.children;

    expect(span.props.children[1]).toBe(0)
    expect(btnIncrement.props.children).toBe('+');
    expect(btnDecrement.props.children).toBe('-');
    expect(btnRemove.props.children).toBe('Remove');
  });

  it('should increase count when click + button', () => {
    const { output, props } = setup();
    const button = output.props.children[1];
    button.props.onClick({});
    expect(props.increment).toHaveBeenCalledWith(0);
  });

  it('should decrease count when click - button', () => {
    const { output, props } = setup();
    const button = output.props.children[2];
    button.props.onClick({});
    expect(props.decrement).toHaveBeenCalledWith(0);
  });

  it('should remove counter when click Remove button', () => {
    const { output, props } = setup();
    const button = output.props.children[3];
    button.props.onClick({});
    expect(props.removeCounter).toHaveBeenCalledWith(0);
  });
});
