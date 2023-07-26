import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/main.scss';
import { useParams } from 'react-router-dom';

import Housing from './pages/Logement';
import ErrorPage from './pages/erreur';

import Rooter from './rooter';

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
    <Rooter />
  </React.StrictMode>
);

export default IdToHousingOrError

