import todos, { initialTodos } from './';
import { addTodo } from '../actions';

describe('Todos Reducer w Action Creator', () => {
  it('should add new todo to list', () => {
    const state = [
      {
        text: 'First todo',
        id: 9,
        done: true
      }
    ];
    const action = addTodo('Sample todo');

    const nextState = todos(state, action);

    expect(nextState).toEqual([
      ...state,
      {
        text: 'Sample todo',
        id: 10,
        done: false
      }
    ]);
  });


});
