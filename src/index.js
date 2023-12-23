import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './faces/faces.css';
import App from './Main';
import { registerSW } from './register.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <App/>
  </React.StrictMode>
);
registerSW();