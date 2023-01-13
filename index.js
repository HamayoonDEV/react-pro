import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {add} from './calculator'
import Header from './components/header';
import Re from './components/redir';



const container = document.getElementById('root')

const Root = ReactDOM.createRoot(container)
Root.render(
  
  <Re/>
)

reportWebVitals();
