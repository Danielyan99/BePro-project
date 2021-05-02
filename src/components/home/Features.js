const Features = () => {
  return (
    <div className='features'>
      <div className='container'>
        <div className='features-inner'>
          <div className='features-item'>
            <div className='features-item__icon'>
              <img src='img/features/1.png' alt='features icon' />
            </div>
            <div className='features-item__info'>
              <h3 className='features-item__title'>Free Shipping</h3>
              <p className='features-item__para'>Orders over $99</p>
            </div>
          </div>
          <hr className='features-seperate-hr' />
          <div className='features-item'>
            <div className='features-item__icon'>
              <img src='img/features/2.png' alt='features icon' />
            </div>
            <div className='features-item__info'>
              <h3 className='features-item__title'>30 days return</h3>
              <p className='features-item__para'>If goods have problem</p>
            </div>
          </div>
          <hr className='features-seperate-hr' />
          <div className='features-item'>
            <div className='features-item__icon'>
              <img src='img/features/3.png' alt='features icon' />
            </div>
            <div className='features-item__info'>
              <h3 className='features-item__title'>Secure payment</h3>
              <p className='features-item__para'>100% secure payment</p>
            </div>
          </div>
          <hr className='features-seperate-hr' />
          <div className='features-item'>
            <div className='features-item__icon'>
              <img src='img/features/4.png' alt='features icon' />
            </div>
            <div className='features-item__info'>
              <h3 className='features-item__title'>24h Support</h3>
              <p className='features-item__para'>Dedicated Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
