import React from 'react';
import ReactDOM from 'react-dom/client'; // Note: This is the modern way (React 18+)
import './index.css';
import App from './App.jsx';

// Create a root element using the new React 18 API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app inside React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);