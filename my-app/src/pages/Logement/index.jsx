import Header from '../../components/header'
import Footer from '../../components/footer'
import Carousel from '../../components/carousel'

function Housing(){
  return(
    <div>
      <section className="body--page">
        <Header />
        <Carousel />
      </section>
      <Footer />
    </div>
  )
}

export default Housing