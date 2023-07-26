import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Home from './pages/Home';
import AboutPage from './pages/a-propos';
import ErrorPage from './pages/erreur';
import IdToHousingOrError from './index';

function Rooter(){
  return(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Fiche-Logement/:id' element={<IdToHousingOrError />} />
          <Route path='/A-Propos' element={<AboutPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}


export default Rooter


