let nextTodoId = 10;

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
};

const asyncStarted = () => {
  return {
    type: 'ASYNC_STARTED'
  }
}

const asyncLoaded = () => {
  return {
    type: 'ASYNC_LOADED'
  }
}

export const asyncAction = () => {
  return dispatch => {

    dispatch(asyncStarted());

    setTimeout(()=>{
      dispatch(asyncLoaded());
    },1000);
  }
}
