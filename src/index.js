import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import componets
import GltfRenderer from './components/GltfRenderer';
import Toolbar from '.components/Toolbar';

//import layouts
import SharedLayout from './layouts/SahredLayoutwithBar.js';

//import pages
import SignIn from './pages/Login/SignIn.js';
import History from './pages/History/History.js';
import Home from './pages/Home.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
