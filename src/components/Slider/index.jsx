import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import '../../styles/Slider.css'

function Slider({ slides }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const previous = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? slides.length - 1 : currentImageIndex - 1
    )
  }
  const next = () => {
    setCurrentImageIndex(
      currentImageIndex === slides.length - 1 ? 0 : currentImageIndex + 1
    )
  }
  if (slides.length === 1) {
    return (
      <article className="soloSlider">
        <img src={slides[currentImageIndex]} alt="Appartement" />
      </article>
    )
  } else {
    return (
      <article className="Slider">
        <section className="sliderImgContainer">
          <button onClick={previous} className="btnPrev">
            <FontAwesomeIcon icon={faChevronLeft} className="iconSlider" />
          </button>
          <img src={slides[currentImageIndex]} alt="Appartement" />
          <button onClick={next} className="btnNext">
            <FontAwesomeIcon icon={faChevronRight} className="iconSlider" />
          </button>
        </section>
        <p className="sliderLoc">
          {currentImageIndex + 1}/{slides.length}
        </p>
      </article>
    )
  }
}

export default Slider
