import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDUVKm0RSLKpBCfSEPNJGb6sqaw49FSIs4",
  authDomain: "e-commerce-clothes-cbf7e.firebaseapp.com",
  projectId: "e-commerce-clothes-cbf7e",
  storageBucket: "e-commerce-clothes-cbf7e.appspot.com",
  messagingSenderId: "901699171096",
  appId: "1:901699171096:web:9b882d0e90b38c45bb246d",
  measurementId: "G-FT4VR35WFT"
};

initializeApp(firebaseConfig);

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
