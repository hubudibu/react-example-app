const defaultTodos = [
  {
    id: 0,
    text: 'Check in round',
    done: false,
  },
  {
    id: 1,
    text: 'Go through homework',
    done: false,
  },
  {
    id: 2,
    text: 'Talk about Flux & Redux',
    done: false,
  },
  {
    id: 3,
    text: 'See how it fits React',
    done: false,
  }
]

const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        done: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state;
  }
};

const todos = (state = defaultTodos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
}

export default todos;
