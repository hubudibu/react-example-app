export const initialTodos = [
  {
    id: 0,
    text: 'Check in round',
    done: false,
  },
  {
    id: 1,
    text: 'Go through async example',
    done: false,
  },
  {
    id: 2,
    text: 'Initialize Firebase',
    done: false,
  },
  {
    id: 3,
    text: 'Test it',
    done: false,
  },
  {
    id: 4,
    text: '???',
    done: false,
  },
  {
    id: 5,
    text: 'Profit',
    done: false,
  }
]

const todos = (state = initialTodos, action = {}) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ];
    case 'ADD_TODOS':
      return action.todos;
    default:
      return state;
  }
};

export default todos;
