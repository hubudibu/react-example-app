import React from 'react';
import './TodoList.css';
import TodoListItem from './TodoListItem.js';

const TodoList = (props) => (<ul className="TodoList">
  {props.todos.map(todo => <TodoListItem todo={todo} />)}
</ul>);

export default TodoList;
