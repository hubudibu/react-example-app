import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todos from './reducers';
import App from './App';
import './index.css';

let todoStore = createStore(todos);

ReactDOM.render(
  <Provider store={todoStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
