import HeaderSlider from "../common/header/HeaderSlider"
import Banner from "./Banner"
import Blog from "./Blog"
import Features from "./Features"
import HomeCatalog from "./HomeCatalog"
import HomeProducts from "./HomeProducts"
import PartnersSlider from "../common/PartnersSlider"
import Footer from "../common/Footer"

const Home = () => {
  return (
    <div className='home'>
      <HeaderSlider />
      <Features />
      <HomeCatalog />
      <Banner />
      <HomeProducts />
      <Blog />
      <PartnersSlider />
      <Footer />
    </div>
  )
}

export default Home
