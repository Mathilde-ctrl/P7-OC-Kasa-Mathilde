import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './sass/main.scss';

import Home from './pages/Home';
import Logement from './pages/Logement';
import Layout from './components/layout';
import APropos from './pages/a-propos';
import PageErreur from './pages/erreur';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Fiche-Logement' element={<Logement />} />
        <Route path='/A-Propos' element={<APropos />} />
        <Route path='*' element={<PageErreur />} />

      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

