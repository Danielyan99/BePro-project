import { BrowserRouter as Router } from "react-router-dom"
import CatalogContainer from "./components/catalog/CatalogContainer"
import Header from "./components/common/header/Header"
import HomeContainer from "./components/home/HomeContainer"
import ProductContainer from "./components/product/ProductContainer"

const { Route } = require("react-router")

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route path='/' exact component={HomeContainer} />
        <Route path='/catalog' component={CatalogContainer} />
        <Route path='/product' component={ProductContainer} />
      </div>
    </Router>
  )
}

export default App
