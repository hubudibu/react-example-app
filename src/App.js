import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo.js';
import TodoList from './components/TodoList.js';

const App = (props) => (
  <div>
    <h1>ToDo</h1>
    <AddTodo />
    <TodoList todos={['Check in round', 'Go through homework', 'Talk about Flux & Redux', 'See how it fits React']} />
  </div>
)

export default App;
