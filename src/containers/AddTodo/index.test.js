import React from 'react';
import renderer from 'react-test-renderer';
import { addTodo } from '../../actions';

import { mapStateToProps, mapDispatchToProps } from './';

it('AddTodo container maps dispatch to todos', () => {
  const dispatchSpy = jest.fn();
  const mockTodo = addTodo();
  const { onSubmit } = mapDispatchToProps(dispatchSpy);
  onSubmit();

  expect(dispatchSpy.mock.calls[0][0].type).toEqual(mockTodo.type);
});
