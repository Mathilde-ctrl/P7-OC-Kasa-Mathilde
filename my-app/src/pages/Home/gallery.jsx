/**
 * @import advertData from JSON file 
 * advertData visible from the console.
 */
import advertData from '../../advert.json'
console.log(advertData)

advertData.forEach(advert =>{

  const advertTitle = advert.title;
  const advertCover = advert.cover;

console.log(advertTitle, advertCover)
})



function Gallery(){
  const covers = advertData.map(advert => advert.cover);

  return(
    <section>
      <div>
        {covers.map((cover, index) => (
          <img key={index} src={cover} alt={`Cover ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}


export default Gallery