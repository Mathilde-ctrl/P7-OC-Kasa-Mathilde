
import Header from "../../components/header"
import Gallery from "../../components/gallery";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import image1 from "../../images/Image source 1.png"

function Home(){

  return (
    <div>
      <section className="body--page">
        <Header />
        <Banner imageSource={image1} showTitle={true} />
        <Gallery />
      </section>
      <Footer />
    </div>
  )
}

export default Home