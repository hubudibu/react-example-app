const loading = (state = false, action = {}) => {
  switch (action.type) {
    case 'ASYNC_STARTED':
      return true;
    case 'ASYNC_LOADED':
      return false;
    default:
      return state;
  }
};

export default loading;
