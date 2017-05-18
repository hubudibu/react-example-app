const loading = (state = false, action = {}) => {
  switch (action.type) {
    case 'TODOS_LOADING':
      return true;
    case 'TODOS_LOADED':
      return false;
    default:
      return state;
  }
};

export default loading;
