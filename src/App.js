import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import ListTodos from './containers/ListTodos';

const App = (props) => (
  <div className="Todo-container">
    <h1 className="Todo-title">todos</h1>
    <div className="Todo-box">
      <AddTodo value="this" />
      <ListTodos />
    </div>
  </div>
)

export default App;
