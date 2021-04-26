import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";
import "firebase/performance";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAY7wejzkQFByzDumPIGl7LjdYSIWIYMJc",
  authDomain: "expense-78336.firebaseapp.com",
  projectId: "expense-78336",
  storageBucket: "expense-78336.appspot.com",
  messagingSenderId: "215432279540",
  appId: "1:215432279540:web:a46260126925961e29b5a1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


