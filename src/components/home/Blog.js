import { Link } from "react-router-dom"

const Blog = () => {
  return (
    <div className='container'>
      <div className='blog'>
        <div
          className='blog-left'
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/img/blog/left-back.png')`,
          }}>
          <span className='blog-left__top'>number of day</span>
          <h2 className='blog-left__num'>197</h2>
          <p className='blog-left__para'>Combo Sale Off Up To 50%</p>
          <div className='blog-left__btn'>
            <Link to='/catalog' className='btn-common'>
              Read More
            </Link>
          </div>
        </div>
        <div className='blog-right'>
          <div className='blog-right__top'>
            <h3 className='blog-right__title'>popular</h3>
            <div className='blog-right-arrows'>
              <div className='blog-right__arrow left'>
                <i className='fas fa-chevron-left'></i>
              </div>
              <div className='blog-right__arrow right'>
                <i className='fas fa-chevron-right'></i>
              </div>
            </div>
          </div>
          <div className='blog-slider'>
            <div
              className='blog-slider__item active'
              style={{
                backgroundImage: `url('${
                  process.env.PUBLIC_URL
                }/img/blog/${1}.png')`,
              }}>
              <div className='blog-slider__active-date'>
                <i className='far fa-clock'></i> Date: April 05, 2017
              </div>
              <h4 className='blog-slider__active-title'>
                The best Summer style from Milan Fashion Week
              </h4>
              <div className='blog-slider__active-bottom'>
                <div className='blog-slider__active-comments'>
                  <i className='fas fa-comments'></i> 05
                </div>
                <hr className='blog-slider__active-hr' />
                <div className='blog-slider__active-hearts'>
                  <i className='fas fa-heart'></i> 150
                </div>
              </div>
            </div>
            <div className='blog-slider-items'>
              <div className='blog-slider__item'>
                <div className='blog-slider__item-image'>
                  <img src='img/blog/2.png' alt='' />
                </div>
                <div className='blog-slider__item-info'>
                  <div className='blog-slider__item-date'>
                    <i className='far fa-clock'></i> Date: April 05, 2017
                  </div>
                  <h4 className='blog-slider__item-title'>
                    Fashion Week London
                  </h4>
                  <div className='blog-slider__item-bottom'>
                    <div className='blog-slider__item-comments'>
                      <i className='fas fa-comments'></i> 05
                    </div>
                    <hr className='blog-slider__item-hr' />
                    <div className='blog-slider__item-hearts'>
                      <i className='fas fa-heart'></i> 150
                    </div>
                  </div>
                </div>
              </div>
              <div className='blog-slider__item'>
                <div className='blog-slider__item-image'>
                  <img src='img/blog/3.png' alt='' />
                </div>
                <div className='blog-slider__item-info'>
                  <div className='blog-slider__item-date'>
                    <i className='far fa-clock'></i> Date: April 05, 2017
                  </div>
                  <h4 className='blog-slider__item-title'>Fashion Show 2017</h4>
                  <div className='blog-slider__item-bottom'>
                    <div className='blog-slider__item-comments'>
                      <i className='fas fa-comments'></i> 05
                    </div>
                    <hr className='blog-slider__item-hr' />
                    <div className='blog-slider__item-hearts'>
                      <i className='fas fa-heart'></i> 150
                    </div>
                  </div>
                </div>
              </div>
              <div className='blog-slider-items__btn'>
                <Link to='/catalog'>
                  view all <i className='fas fa-arrow-right'></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
