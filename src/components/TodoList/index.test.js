import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from './';

describe('Todo List Item', () => {
  it('renders empty list as in snapshot', () => {
    const wrapper = renderer.create(<TodoList />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders todo item as in snapshot', () => {
    const todos = [
      {
        text: 'Sample todo 1',
        id: 1
      },
      {
        text: 'Sample todo 2',
        id: 2
      }];
    const wrapper = renderer.create(<TodoList todos={todos} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
})
