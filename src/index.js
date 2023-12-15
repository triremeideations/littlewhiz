import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SelectionPage from './SelectionPage';
import HomePage from './HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SelectionPage />
    <HomePage/>
  </React.StrictMode>
);
