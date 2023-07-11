/**
 * @import advertData from JSON file 
 * advertData visible from the console.
 */
import advertData from '../advert.json'
console.log(advertData)

/**
 * Vérifie le chemin des données
 */
advertData.forEach(advert =>{

  const advertTitle = advert.title;
  const advertCover = advert.cover;

console.log(advertTitle, advertCover)
})



function Gallery(){
  const covers = advertData.map(advert => advert.cover);
  const titles = advertData.map(advert => advert.title )

  return(
    <section>
      <div className='gallery'>
        {covers.map((cover, index) => (
          <div key={index} className='gallery--card'>
            <img  src={cover} alt={titles[index]} className='gallery--card__image' />
            <div className='gallery--card__gradient'></div>
            <h3 className='gallery--card__title'>{titles[index]}</h3>
          </div>
        ))} 
      </div>
    </section>
  );
}


export default Gallery