import { addTodo } from './index.js';

describe('Actions', () => {
  it('match snapshot', () => {
    const action = addTodo('Sample text');
    expect(action).toMatchSnapshot();
  });
});
