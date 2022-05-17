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
import PageNoFound from './pages/PageNoFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/"  element={<App />}>
          <Route path='/' element={<Home />}/>
        </Route>

        <Route path='*' element={<PageNoFound /> } />
      </Routes>
    </BrowserRouter>
);
reportWebVitals();
