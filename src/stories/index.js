import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from './Welcome';

import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import TodoListItem from '../components/TodoListItem';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('AddTodo', module)
  .add('without value', () => (
    <AddTodo />
  ))
  .add('with some emoji', () => (
    <AddTodo value="😀 😎 👍 💯" />
  ));

storiesOf('TodoList', module)
  .add('without todos', () => (
    <TodoList />
  ))
  .add('with todos', () => (
    <TodoList todos={['Apple', 'Pear', 'Zebras']} />
  ));

storiesOf('TodoListItem', module)
  .add('without value', () => (
    <TodoListItem />
  ))
  .add('with todo', () => (
    <TodoListItem todo="Apple" />
  ))
  .add('with some emoji', () => (
    <TodoListItem todo="😀 😎 👍 💯" />
  ));
