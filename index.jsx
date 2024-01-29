import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Replace 'App' with the main component of your application

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
