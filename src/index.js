import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDngeZ5MNHziBYJzVr3c07qlFCCX1l0e2g",
    authDomain: "cart-1c300.firebaseapp.com",
    projectId: "cart-1c300",
    storageBucket: "cart-1c300.appspot.com",
    messagingSenderId: "478935146720",
    appId: "1:478935146720:web:e7945ace3f15bfd255b085"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
