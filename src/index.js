import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=29a0346ff342913fb597eb400c44f143