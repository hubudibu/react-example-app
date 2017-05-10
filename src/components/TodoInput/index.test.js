import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import TodoInput from './';


it('TodoInput renders as in snapshot', () => {
  const wrapper = renderer.create(<TodoInput onSubmit={()=>{}} />).toJSON();
  expect(wrapper).toMatchSnapshot();
});

it('TodoInput value changes state', () => {
  const todoText = 'Sample todo';
  const input = mount(<TodoInput onSubmit={()=>{}} />);
  input.simulate('change', {target: {value: todoText}});
  expect(input.state()).toEqual({value: todoText});
});

it('TodoInput input changes value', () => {
  const todoText = 'Sample todo';
  const input = mount(<TodoInput onSubmit={()=>{}} />);
  input.simulate('change', {target: {value: todoText}});
  expect(input.find('input').get(0).value).toEqual(todoText);
});
