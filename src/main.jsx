import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyDalk2hokwJJHPjvMhjrmTfQC1v2zlyNF4",
  authDomain: "digital-business-card-13265.firebaseapp.com",
  projectId: "digital-business-card-13265",
  storageBucket: "digital-business-card-13265.appspot.com",
  messagingSenderId: "930839925238",
  appId: "1:930839925238:web:aa880dd20900bd941ab7d7",
  measurementId: "G-FE7ECL7VHV"
})

ReactDOM.createRoot(document.getElementById('root')).render(<App />)