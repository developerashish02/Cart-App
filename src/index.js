import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

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


reportWebVitals();
