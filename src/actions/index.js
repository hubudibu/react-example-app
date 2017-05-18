import database from '../database';

let nextTodoId = 10;


export const addTodo = (text) => {
  const newTodo = database.ref('/todos').push();
  newTodo.set({
    text
  });
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
};

const todosLoading = () => {
  return {
    type: 'TODOS_LOADING'
  }
}

const todosLoaded = (todos) => {
  return {
    type: 'TODOS_LOADED',
    todos
  }
}

export const loadTodos = () => {
  return dispatch => {
    dispatch(todosLoading());
    database.ref('/todos').once('value', snap => {
      dispatch(todosLoaded(snap.val()));
    });
  }
}
