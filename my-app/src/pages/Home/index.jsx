
import Header from "../../components/header"
import Gallery from "../../components/gallery";
import Banner from "../../components/banner";
import Footer from "../../components/footer";

function Home(){
  return (
    <div>
      <section className="body--page">
        <Header />
        <Banner />
        <Gallery />
      </section>
      <Footer />
    </div>
  )
}

export default Home