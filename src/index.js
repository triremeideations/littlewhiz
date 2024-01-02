import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './faces/faces.css';
import App from './Main';
import PHA from './Notice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PHA/>
    <App/>
  </React.StrictMode>
);
