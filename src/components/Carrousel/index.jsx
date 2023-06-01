import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

function Carrousel({ apartmentList, id }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0
        ? apartmentList.find((apartment) => apartment.id === id)?.pictures
            .length - 1
        : prevIndex - 1
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex ===
      apartmentList.find((apartment) => apartment.id === id)?.pictures.length -
        1
        ? 0
        : prevIndex + 1
    )
  }

  const apartmentImages = apartmentList.find(
    (apartment) => apartment.id === id
  )?.pictures

  if (apartmentImages.length === 1) {
    return (
      <div>
        <img src={apartmentImages[0]} alt="Appartement" />
      </div>
    )
  }

  return (
    <section className="Carrousel">
      <button onClick={previousImage}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <img src={apartmentImages[currentImageIndex]} alt="Appartement" />
      <button onClick={nextImage}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <p>{`${currentImageIndex + 1} / ${apartmentImages.length}`}</p>
    </section>
  )
}

export default Carrousel
