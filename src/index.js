import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App name={['apple', 'pear', 'banana']} />,
  document.getElementById('root')
);
