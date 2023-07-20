import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './sass/main.scss';

import Home from './pages/Home';
import Housing from './pages/Logement';
import AboutPage from './pages/a-propos';
import ErrorPage from './pages/erreur';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Fiche-Logement/:id' element={<Housing />} />
        <Route path='/A-Propos' element={<AboutPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


