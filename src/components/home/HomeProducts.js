const HomeProducts = () => {
  return (
    <div className='container'>
      <div className='home-product'>
        <div className='home-product__item'>
          <div className='home-product__info'>
            <p className='home-product__brand'>suits</p>
            <h2 className='home-product__title'>
              Slim Fit Prince of Wales Check Wool
            </h2>
            <p className='home-product__price'>• 2,295.00 USD</p>
          </div>
          <div className='home-product__image'>
            <img src='img/homeProducts/1.png' alt='product img' />
          </div>
        </div>
        <div className='home-product__item'>
          <div className='home-product__info'>
            <p className='home-product__brand'>Scarves</p>
            <h2 className='home-product__title'>
              Lightweight check wool cashmere scarf
            </h2>
            <p className='home-product__price'>• 425.00 USD</p>
          </div>
          <div className='home-product__image'>
            <img src='img/homeProducts/2.png' alt='product img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeProducts
