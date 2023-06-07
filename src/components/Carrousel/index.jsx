import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import '../../styles/Carrousel.css'

function Carrousel({ slides }) {
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
      <div className="soloCarrousel">
        <img src={slides[currentImageIndex]} alt="Appartement" />
      </div>
    )
  } else {
    return (
      <section className="Carrousel">
        <aside className="carrouselImgContainer">
          <button onClick={previous} className="btnPrev">
            <FontAwesomeIcon icon={faChevronLeft} className="iconCarrousel" />
          </button>
          <img src={slides[currentImageIndex]} alt="Appartement" />
          <button onClick={next} className="btnNext">
            <FontAwesomeIcon icon={faChevronRight} className="iconCarrousel" />
          </button>
        </aside>
        <p className="carrouselLoc">
          {currentImageIndex + 1}/{slides.length}
        </p>
      </section>
    )
  }
}

export default Carrousel
