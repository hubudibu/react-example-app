import React from 'react';
import './style.css';

const AddTodo = (props) => <input className="AddTodo" type="text" placeholder="Add new todo item..." value={props.value} />;

export default AddTodo;
