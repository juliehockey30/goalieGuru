import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDgSou_Qg9Lu45v-lk6oTkBdyqKcZlqUTk",
  authDomain: "goalieguru-d5055.firebaseapp.com",
  databaseURL: "https://goalieguru-d5055.firebaseio.com",
  projectId: "goalieguru-d5055",
  storageBucket: "goalieguru-d5055.appspot.com",
  messagingSenderId: "1075380740391",
  appId: "1:1075380740391:web:6c2ccc4f032d9c1d948902"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
