import React from 'react';
import './TodoListItem.css';

const TodoListItem = (props) => <li className="TodoListItem">{props.todo}</li>;

export default TodoListItem;
