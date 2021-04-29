import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signup from "./signup"; 
import Login from "./Login";
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
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
  <BrowserRouter>
<Switch>

  <Route exact path="/signup" exact component={Signup}></Route>
<Route exact path="/expenseapp/:name" exact component={App}></Route>
<Route exact path="/login" exact component={Login}></Route>
</Switch>
</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


