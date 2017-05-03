import React from 'react';
import './App.css';

const App = (props) => (
  <div>
    <h1>ToDo</h1>
    <input type="text" placeholder="Add new todo item..." />
    <ul>
      <li>Check in round</li>
      <li>Go through homework</li>
      <li>Talk about Flux & Redux</li>
      <li>See how it fits React</li>
    </ul>
  </div>
)

export default App;
