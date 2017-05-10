import todos, { initialTodos } from './'

describe('Todos Reducer', () => {
  it('should return initial todo list', () => {
    const nextState = todos();
    expect(nextState).toEqual(initialTodos);
  });


  it('should add new todo to list', () => {
    const state = [];
    const action = {
      type: 'ADD_TODO',
      text: 'Sample todo',
      id: 10
    };

    const nextState = todos(state, action);

    expect(nextState).toEqual([
      {
        text: 'Sample todo',
        id: 10,
        done: false
      }
    ]);
  });


});
