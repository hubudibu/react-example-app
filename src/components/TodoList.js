import React from 'react';
import TodoListItem from './TodoListItem.js';

const TodoList = (props) => (<ul>
  {props.todos.map(todo => <TodoListItem todo={todo} />)}
</ul>);

export default TodoList;
