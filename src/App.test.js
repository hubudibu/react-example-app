import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('App renders without crashing', () => {
  const wrapper = shallow(<App />);
});
