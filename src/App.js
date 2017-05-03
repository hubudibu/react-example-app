import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo.js';
import TodoList from './components/TodoList/TodoList.js';

const App = (props) => (
  <div className="Todo-container">
    <h1 className="Todo-title">todos</h1>
    <div className="Todo-box">
      <AddTodo />
      <TodoList todos={['Check in round', 'Go through homework', 'Talk about Flux & Redux', 'See how it fits React']} />
    </div>
  </div>
)

export default App;
