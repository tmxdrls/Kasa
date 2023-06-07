import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import '../../styles/Collapses.css'

function Collapses({ props }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section onClick={toggleCollapse} className="containerCollapse">
      <aside className="bannerCollapse">
        <p>{props.title}</p>
        <FontAwesomeIcon
          icon={faChevronUp}
          className="iconCollapse"
          rotation={isOpen ? 180 : 0}
        />
      </aside>
      {isOpen && (
        <aside className="contentCollapses">{props.description}</aside>
      )}
    </section>
  )
}

export default Collapses
