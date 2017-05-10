import React from 'react';
import './App.css';
import AddTodoWrapped from './containers/AddTodo';
import ListTodos from './containers/ListTodos';

const App = (props) => (
  <div className="Todo-container">
    <h1 className="Todo-title">todos</h1>
    <div className="Todo-box">
      <AddTodoWrapped />
      <ListTodos filter="checked" />
    </div>
  </div>
);

export default App;
