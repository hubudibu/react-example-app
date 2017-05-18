import React from 'react';
import './App.css';
import AddTodo from './containers/AddTodo';
import ListTodos from './containers/ListTodos';
import Loading from './containers/Loading';

const App = (props) => (
  <div className="Todo-container">
    <h1 className="Todo-title">todos</h1>
    <div className="Todo-box">
      <AddTodo value="this" onSubmit={() => {}} />
      <ListTodos />
    </div>
    <Loading />
  </div>
)

export default App;
