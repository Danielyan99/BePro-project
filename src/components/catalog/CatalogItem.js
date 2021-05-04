const CatalogItem = ({ img, title, price, discountedPrice }) => {
  // console.log(img, title, price, discountedPrice)
  return (
    <div className='catalog-item'>
      <div className='catalog-item__img'>
        <img src={`img/catalog/${img}.png`} alt='' />
      </div>
      <h3 className='catalog-item__title'>{title}</h3>
      {discountedPrice ? (
        <div className='catalog-item__price discounted'>
          <p className='catalog-item__price-num'>${price} USD</p>
          <p className='catalog-item__price-discounted'>
            ${discountedPrice} USD
          </p>
        </div>
      ) : (
        <div className='catalog-item__price'>
          <p className='catalog-item__price-num'>${price} USD</p>
        </div>
      )}
    </div>
  )
}

export default CatalogItem
