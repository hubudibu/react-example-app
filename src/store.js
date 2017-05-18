import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reactReduxFirebase } from 'react-redux-firebase';

const config = {
    apiKey: "AIzaSyCbIpLKw2IjUN7SBAqdqve2uE5Jyw3ZyV8",
    authDomain: "react-todo-example-13004.firebaseapp.com",
    databaseURL: "https://react-todo-example-13004.firebaseio.com"
};

const createStoreWithFirebase = compose(
  reactReduxFirebase(config, { userProfile: 'users' }),
)(createStore)

const store = createStoreWithFirebase(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

export default store;
