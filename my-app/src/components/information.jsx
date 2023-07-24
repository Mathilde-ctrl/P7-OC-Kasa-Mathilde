//import Collapse from "./collapse";
import advertData from '../advert.json';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';



function Informations(){
  /**
   * "useParams()" est un hook qui permet d'extraire la valeur du paramètre "id" dans l'URL.
   * {id} = extrait le paramètre "id" directement de l'object en utilisant la destructuration d'objet.
   */
  const {id} = useParams();

  /**
   * méthode .find() sur advertData pour rechercher la propriété .id  correspondant à la valeur "id" 
   * et accéder à une propriété correspondant.
   */
  const title = advertData.find((advert) => advert.id === id).title;
  console.log("title : ", title)

  const description = advertData.find((advert) => advert.id === id).description;
  console.log("description : ", description)

  const location = advertData.find((advert) => advert.id === id).location;
  console.log("location : ", location)

  const equipements = advertData.find((advert) => advert.id === id).equipments;
  console.log("equipements : ", equipements)

  const tags = advertData.find((advert) => advert.id === id).tags;
  console.log("tags : ", tags)

  const rating = advertData.find((advert) => advert.id === id).rating;
  console.log("rating : ", rating)

  const hostName = advertData.find((advert) => advert.id === id).host.name;
  console.log("host name : ", hostName)

  const hostPicture = advertData.find((advert) => advert.id === id).host.picture;
  console.log("host picture : ", hostPicture)

  /**
   * @function renderStars - @param rating - 
   * Permet de générer les étoiles dans un tableau en fonction de la note fournie.
   *  
   * @const maxStars - Représente le nombre d'étoile maximal 
   * @const activeStars - Calcule le nombre d'étoile active suivant la valeur de rating.
   * exemple : rating is 3 so : Math.max(3, 0) = 3 and Math.min(3, maxStars) = 3 
   * 
   * @returns 
   * Array.from = methode pour créer un tableau ayant pour lenght "maxStars"
   * 
   */
  const renderStars = (rating) => {
    const maxStars = 5;
    const activeStars = Math.min(Math.max(rating, 0), maxStars);

    return Array.from({ length: maxStars }, (_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        size="2xl"
        className={index < activeStars ? 'active' : 'neutral'}
      />
    ));
  };


  return(
    <div className="information">
      <div className='information--text'>
        <h2 className="information--title" >{title}</h2>
        <p className="information--location" >{location}</p>
        <div className='information--tags'>
          {tags.map((tag, index) => (
            <span className="information--tags__tag" key={index}>{tag}</span>
          ))}
      </div>
      </div>
      <div className='information--host--rating'>
        <div className="information--host">
          <p className="information--host__name">{hostName}</p>
          <img className="information--host__picture" src={hostPicture} alt="Portrait de l'hoste" />
        </div>
        <span className="information--rating" >{renderStars(rating)}</span>
      </div>
      
      
    </div>
  )
}

export default Informations;
