import Pathway from "../common/Pathway"
import CatalogInner from "./CatalogInner"
import Banner from "../home/Banner"
import PartnersSlider from "../common/PartnersSlider"
import Footer from "../common/Footer"

const Catalog = ({ catalog }) => {
  // console.log(catalog)
  return (
    <div className='catalog'>
      <Pathway />
      <CatalogInner />
      Catalog
      <Banner />
      <PartnersSlider />
      <Footer />
    </div>
  )
}

export default Catalog
