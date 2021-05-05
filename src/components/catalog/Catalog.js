import Pathway from "../common/Pathway"
import CatalogInner from "./CatalogInner"
import Banner from "../home/Banner"
import PartnersSlider from "../common/PartnersSlider"
import Footer from "../common/Footer"
import CatalogContent from "./CatalogContent"

const Catalog = ({ catalog }) => {
  // console.log(catalog)
  return (
    <div className='catalog'>
      <Pathway />
      <CatalogInner />
      <CatalogContent />
      <Banner />
      <PartnersSlider />
      <Footer />
    </div>
  )
}

export default Catalog
