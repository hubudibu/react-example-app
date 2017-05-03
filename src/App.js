import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = (props) => (
  <div className="Todo-container">
    <h1 className="Todo-title">todos</h1>
    <div className="Todo-box">
      <AddTodo value="this" />
      <TodoList todos={['Check in round', 'Go through homework', 'Talk about Flux & Redux', 'See how it fits React']} />
    </div>
  </div>
)

export default App;
