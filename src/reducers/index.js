export const initialTodos = [
  {
    id: 0,
    text: 'Check in round',
    done: false,
  },
  {
    id: 1,
    text: 'Go through redux example',
    done: false,
  },
  {
    id: 2,
    text: 'Talk about testing with Jest',
    done: false,
  },
  {
    id: 3,
    text: '???',
    done: false,
  },
  {
    id: 4,
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
    default:
      return state;
  }
};

export default todos;
