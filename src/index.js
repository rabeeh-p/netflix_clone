import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import New from './components/New';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    
    <App />
    <New />


  </>
);


