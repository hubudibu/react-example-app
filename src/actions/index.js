import database from '../database';

let nextTodoId = 10;


export const addTodo = (text) => {
  return dispatch => {
    dispatch(todoAdding(text));
    const newTodo = database.ref('/todos').push();
    newTodo.set({
      text
    }).then(()=>{
      dispatch(loadTodos());
    });
  };
};

const todoAdding = (text) => {
  return {
    type: 'TODO_ADDING',
    text
  }
}

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
      let list = [];
      snap.forEach((child)=>{
        list.push({text: child.val().text});
      })
      dispatch(todosLoaded(list));
    });
  }
}
