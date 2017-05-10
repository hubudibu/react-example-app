import React from 'react';
import renderer from 'react-test-renderer';

import { mapStateToProps, mapDispatchToProps } from './';

it('ListTodos container maps state to todos', () => {
  const state = 'Test state';
  const props = mapStateToProps(state);

  expect(props).toEqual({todos: state});
});
