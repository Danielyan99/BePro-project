import { useState } from "react"
import { Link } from "react-router-dom"

const HeaderSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <div
      className='header-slider'
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/img/header-slider-back.png')`,
      }}>
      <div className='header-container'>
        <div className='header-slider-inner'>
          <div
            className={`header-slider__item ${
              currentSlide === 0 ? "active" : null
            }`}>
            <div className='header-slider__item-content'>
              <h1 className='header-slider__title'>New Arrival</h1>
              <div className='header-slider__btn'>
                <Link to='/catalog' className='btn-common'>
                  buy now
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`header-slider__item ${
              currentSlide === 1 ? "active" : null
            }`}>
            <div className='header-slider__item-content'>
              <h1 className='header-slider__title'>
                New Arrival222222222222222222222
              </h1>
              <div className='header-slider__btn'>
                <Link to='/catalog' className='btn-common'>
                  buy now
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`header-slider__item ${
              currentSlide === 2 ? "active" : null
            }`}>
            <div className='header-slider__item-content'>
              <h1 className='header-slider__title'>
                New Arrival3333333333333333333
              </h1>
              <div className='header-slider__btn'>
                <Link to='/catalog' className='btn-common'>
                  buy now
                </Link>
              </div>
            </div>
          </div>
          <div
            className='header-slider-arrow left'
            onClick={() => {
              currentSlide > 0
                ? setCurrentSlide(currentSlide - 1)
                : setCurrentSlide(2)
            }}>
            <i className='fas fa-long-arrow-alt-left'></i>
          </div>
          <div
            className='header-slider-arrow right'
            onClick={() => {
              currentSlide < 2
                ? setCurrentSlide(currentSlide + 1)
                : setCurrentSlide(0)
            }}>
            <i className='fas fa-long-arrow-alt-right'></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSlider
