import Header from "../../components/header"
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import image2 from "../../images/Image source 2.png"

function APropos(){
  return(
    <div>
      <section className="body--page">
      <Header />   
      <Banner imageSource={image2} showTitle={false} isAProposPage={true} /> 

    </section>
    <Footer />  
    </div>
  
  )
}

export default APropos