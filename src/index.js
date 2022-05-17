import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';


import App from './App';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/"  element={<App />}>
        <Route path='/' element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
);
reportWebVitals();
