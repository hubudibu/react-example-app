import React from 'react';
import Greeting from './components/Greeting.js';
import './App.css';

const App = (props) => (
  <div>
    <h1>HII I'm an arrow function</h1>
    {props.name.map((name, key) =>  <Greeting key={key} name={name} />)}
  </div>
)

export default App;
