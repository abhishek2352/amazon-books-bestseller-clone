import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div className='header'>
    <h1>Amazon bestsellers</h1>
    <p>Our most popular products based on sales. Updated frequently. </p>
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
