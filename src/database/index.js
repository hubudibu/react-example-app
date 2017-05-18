import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCbIpLKw2IjUN7SBAqdqve2uE5Jyw3ZyV8",
    authDomain: "react-todo-example-13004.firebaseapp.com",
    databaseURL: "https://react-todo-example-13004.firebaseio.com",
    projectId: "react-todo-example-13004",
    storageBucket: "react-todo-example-13004.appspot.com",
    messagingSenderId: "433177031746"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
