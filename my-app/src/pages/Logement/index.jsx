import Header from '../../components/header';
import Footer from '../../components/footer';
import Carousel from '../../components/carousel';
import Informations from  '../../components/information';
import advertData from '../../advert.json';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/collapse';

function Housing(){
  /**
   * "useParams()" est un hook qui permet d'extraire la valeur du paramètre "id" dans l'URL.
   * {id} = extrait le paramètre "id" directement de l'object en utilisant la destructuration d'objet.
   */
  const {id} = useParams();

  /**
   * méthode .find() sur advertData pour rechercher la propriété .id  correspondant à la valeur "id" 
   * et accéder à une propriété correspondant.
   */
  const description = advertData.find((advert) => advert.id === id).description;
  const equipements = advertData.find((advert) => advert.id === id).equipments;


  return(
    <div>
      <section className="body--page">
        <Header />
        <Carousel />
        <Informations />
        <div className="information--collapses">
          <Collapse 
            title="Description"
            text={description}
          />
          <Collapse 
            title="Équipements"
            text= {equipements.map((equipement, index) => (
                    <li className="information--collapse__equipements" key={index} >{equipement}</li>
                  ))}
          />
      </div>
      </section>
      <Footer />
    </div>
  )
}

export default Housing