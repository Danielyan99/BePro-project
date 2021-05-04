import { Link } from "react-router-dom"

const CatalogInner = () => {
  return (
    <div className='container'>
      <div className='catalog-inner'>
        <div className='catalog-inner__left catalog-inner__item'>
          <div className='catalog-inner__info'>
            <p className='catalog-inner__subtitle'>lifestyle</p>
            <h3 className='catalog-inner__title'>New Now: Striped cotton</h3>
            <div className='catalog-inner__btn'>
              <Link to='/'>more info</Link>
            </div>
          </div>
          <div className='catalog-inner__image'>
            <img src='img/catalogInner/1.png' alt='' />
          </div>
        </div>
        <div className='catalog-inner__right catalog-inner__item'>
          <div className='catalog-inner__image'>
            <img src='img/catalogInner/2.png' alt='' />
          </div>
          <div className='catalog-inner__info'>
            <p className='catalog-inner__subtitle'>lifestyle</p>
            <h3 className='catalog-inner__title'>Fashion Collection</h3>
            <div className='catalog-inner__btn'>
              <Link to='/'>more info</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogInner
