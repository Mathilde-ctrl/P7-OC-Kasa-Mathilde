
/**
 * @import advertData du fichier advert.json  
 * advertData est visible depuis la console.
 */
import React,{useState} from 'react';
import advertData from '../advert.json'
import { useParams } from 'react-router-dom';


function Carousel() {
  /**
   * "useParams()" est un hook qui permet d'extraire la valeur du paramètre "id" dans l'URL.
   * {id} = extrait le paramètre "id" directement de l'object en utilisant la destructuration d'objet.
   */
  const { id } = useParams();

  /**
   * méthode .find() sur advertData pour rechercher la propriété .id correspondant à la valeur "id" 
   * et accéder à la propriété .pictures correspondant.
   */
  const pictures = advertData.find((advert) => advert.id === id).pictures;

  /**
   * "useState(0)" est un hook qui retourne un tableau avec 2 élements: 
   * "currentSlideIndex" est une variable avec une valeur initial de 0 pour afficher la première image.
   * "setCurrentSlideIndex" est une fonction utilisé pour mettre à jour la variable. 
   */
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  /**
   * @constant changeSlide - Est une fonction ayant pour paramètre (direction) -1 ou 1 
   * Permet de défiller les images en cliquant sur les flèches. 
   *  
   * @constant nextSlideIndex - Variable qui calcule l'index de la prochaine slide
   * "currentSlideIndex" contient l'index de l'image visible
   * (direction) est égale à -1 ou 1 
   * .pictures.length représente la somme totale des images dans []
   * % pictures.length est une opération modulus qui permet d'enchainer les slides en boucles. 
   * 
   * Exemple dernière slide (currentSlideIndex = 5 + direction = 1 + pictures.length = 5 ) : 11 
   * 11 %(mod) 5 : 1 
   * Donc retour à la première slide.  
   * 
   * @function setCurrentSlideIndex avec pour paramètre nextSlideIndex 
   *  
   */
  const changeSlide = (direction) => {
    const nextSlideIndex = (currentSlideIndex + direction + pictures.length) % pictures.length;
    setCurrentSlideIndex(nextSlideIndex);
  }


  return (
    <div>
      <div className='carousel'>
        {pictures.map((picture, index) => (
          <img key={index} src={picture} alt="Visuel du logement  " className={index === currentSlideIndex ? 'carousel--image visible' : 'carousel--image'}/>
        ))}
      </div>
      {pictures.length > 1 && (
        <div className='tools' >
          <div className='slideTools'>
            <i onClick={() => changeSlide(-1)}  className='arrow arrow--left'></i>
            <i onClick={() => changeSlide(1)}  className='arrow arrow--right'></i>
          </div>
          <p className='count'>{currentSlideIndex + 1 }/{pictures.length}</p>
        </div>
      )}
    </div>
  );
}

export default Carousel;
