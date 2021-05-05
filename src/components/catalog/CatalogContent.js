const CatalogContent = () => {
  return (
    <div className='catalog-content'>
      <div className='container'>
        <div className='filter-top'>
          <div className='filter-top__headline'>
            <h4 className='filter-title'>filter</h4>
            <div className='filter-reset__btn'>
              <img src='img/icons/filter-reset.png' alt='filter reset' />
            </div>
          </div>
          <div className='filter-top__sortBy'>
            <h4 className='filter-title'>Sort By: Price $ - $$</h4>
          </div>
          <div className='filter-top__show'>
            <h4 className='filter-title'>
              Show:
              <select name='show-num' id='show-num'>
                <option value='8'>8</option>
                <option value='16'>16</option>
                <option value='24'>24</option>
                <option value='32'>32</option>
              </select>
            </h4>
          </div>
          <div className='filter-top__view-mode'>
            <div className='filter-view__item'>
              <img src='img/icons/view1.png' alt='' />
            </div>
            <div className='filter-view__item'>
              <img src='img/icons/view2.png' alt='' />
            </div>
          </div>
          <div className='filter-top__btn'>view all</div>
        </div>
        <div className='catalog-content-inner'>
          <div className='filter-right'></div>
          <div className='catalog-products'></div>
        </div>
      </div>
    </div>
  )
}

export default CatalogContent
