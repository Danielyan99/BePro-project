import CatalogItem from "../catalog/CatalogItem"

const HomeCatalog = ({ catalog }) => {
  const catalogSpliced = catalog.splice(0, 12)
  const homeCatalogItems = catalogSpliced.map((item) => (
    <CatalogItem
      img={item.img}
      title={item.title}
      price={item.price}
      discountedPrice={item.discountedPrice}
      key={item.id}
    />
  ))
  return (
    <div className='container'>
      <div className='home-catalog'>{homeCatalogItems}</div>
    </div>
  )
}

export default HomeCatalog
