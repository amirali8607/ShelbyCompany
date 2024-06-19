import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeFunction } from './context/ThemeContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeFunction>
      <App />
    </ThemeFunction>
  </React.StrictMode>
);
