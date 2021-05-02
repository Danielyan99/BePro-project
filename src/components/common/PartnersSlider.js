import { useState } from "react"

const PartnersSlider = () => {
  const [currentSlides, setCurrentSlides] = useState([1, 2, 3, 4])
  return (
    <div className='header-container'>
      <div className='partners-slider'>
        <div
          className={`partners-slider__item ${
            currentSlides.includes(1) ? "active" : ""
          }`}>
          <img src='img/partners/1.png' alt='partner1' />
        </div>
        <div
          className={`partners-slider__item ${
            currentSlides.includes(2) ? "active" : ""
          }`}>
          <img src='img/partners/2.png' alt='partner1' />
        </div>
        <div
          className={`partners-slider__item ${
            currentSlides.includes(3) ? "active" : ""
          }`}>
          <img src='img/partners/3.png' alt='partner1' />
        </div>
        <div
          className={`partners-slider__item ${
            currentSlides.includes(4) ? "active" : ""
          }`}>
          <img src='img/partners/4.png' alt='partner1' />
        </div>
        <div
          className={`partners-slider__item ${
            currentSlides.includes(5) ? "active" : ""
          }`}>
          <img src='img/partners/2.png' alt='partner1' />
        </div>
        <div
          className={`partners-slider__item ${
            currentSlides.includes(6) ? "active" : ""
          }`}>
          <img src='img/partners/3.png' alt='partner1' />
        </div>
        <div
          className={`partners-slider__item ${
            currentSlides.includes(7) ? "active" : ""
          }`}>
          <img src='img/partners/1.png' alt='partner1' />
        </div>
        <div
          className={`partners-slider__item ${
            currentSlides.includes(8) ? "active" : ""
          }`}>
          <img src='img/partners/4.png' alt='partner1' />
        </div>
        <div
          className={`partners-slider__item ${
            currentSlides.includes(9) ? "active" : ""
          }`}>
          <img src='img/partners/3.png' alt='partner1' />
        </div>
        <div
          className={`partners-slider__item ${
            currentSlides.includes(10) ? "active" : ""
          }`}>
          <img src='img/partners/2.png' alt='partner1' />
        </div>
        <div
          className={`partners-slider__item ${
            currentSlides.includes(11) ? "active" : ""
          }`}>
          <img src='img/partners/1.png' alt='partner1' />
        </div>
        <div
          className={`partners-slider__item ${
            currentSlides.includes(12) ? "active" : ""
          }`}>
          <img src='img/partners/3.png' alt='partner1' />
        </div>
        <div
          className='partners-slider__arrow left'
          onClick={() => {
            if (currentSlides[0] === 1) {
              setCurrentSlides([9, 10, 11, 12])
            } else
              setCurrentSlides([
                ...currentSlides.map((num) => parseInt(num) - 1),
              ])
          }}>
          <i className='fas fa-chevron-left'></i>
        </div>
        <div
          className='partners-slider__arrow right'
          onClick={() => {
            if (currentSlides[currentSlides.length - 1] === 12) {
              setCurrentSlides([1, 2, 3, 4])
            } else
              setCurrentSlides([
                ...currentSlides.map((num) => parseInt(num) + 1),
              ])
          }}>
          <i className='fas fa-chevron-right'></i>
        </div>
      </div>
    </div>
  )
}

export default PartnersSlider
