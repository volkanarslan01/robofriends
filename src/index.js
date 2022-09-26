import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardList from './CardList';
// İmport card.js Files
//  import Card from './card.js';
import reportWebVitals from './reportWebVitals';

import 'tachyons'; 
// CSS import Tachyons
import {robots} from './robots.js';
// İmport robots.js files
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <CardList robots = {robots}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
