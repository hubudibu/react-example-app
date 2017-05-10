import React from 'react';
import renderer from 'react-test-renderer';
import TodoListItem from './';

describe('Todo List Item', () => {
  it('renders empty item as in snapshot', () => {
    const wrapper = renderer.create(<TodoListItem />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders todo item as in snapshot', () => {
    const todo = {
      text: 'Sample todo'
    };
    const wrapper = renderer.create(<TodoListItem todo={todo} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
})
