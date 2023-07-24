import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './sass/main.scss';

import Home from './pages/Home';
import Housing from './pages/Logement';
import AboutPage from './pages/a-propos';
import ErrorPage from './pages/erreur';

import advertData from './advert.json';


/**
 * @function isIdValide - @param (id)
 * Permet de vérifier si l'id existe dans advertData  
 * méthode .find() sur advertData pour rechercher la propriété .id  correspondant à la valeur "id" 
 */
function isIdValide(id){
  return advertData.find(advert => advert.id === id);
}

/**
 * @function IdToHousingOrError - 
 * Permet de vérifier si la variable "id" est valide et existe dans la fonction IsIdValide 
 */
function IdToHousingOrError(){
  const {id} = useParams();
  return isIdValide(id) ? <Housing /> : <ErrorPage />
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
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


