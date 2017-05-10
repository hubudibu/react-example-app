import React from 'react';
import './style.css';

const TodoListItem = (props) => <li className="TodoListItem">{props.todo && props.todo.text}</li>;

export default TodoListItem;
