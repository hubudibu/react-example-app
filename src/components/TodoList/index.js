import React from 'react';
import './style.css';
import TodoListItem from '../TodoListItem';

const TodoList = (props) => (<ul className="TodoList">
  {props.todos && props.todos.map(todo => <TodoListItem todo={todo} />)}
</ul>);

export default TodoList;
