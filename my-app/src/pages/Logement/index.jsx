import Header from '../../components/header';
import Footer from '../../components/footer';
import Carousel from '../../components/carousel';
import Informations from  '../../components/information';
import advertData from '../../advert.json';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/collapse';

function Housing(){
  const {id} = useParams();

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