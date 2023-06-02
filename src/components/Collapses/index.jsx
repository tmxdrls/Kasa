import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import '../../styles/Collapses.css'

function Collapses({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section onClick={toggleCollapse}>
      <aside className="bannerCollapse">
        <button>{title}</button>
        <FontAwesomeIcon icon={faChevronUp} rotation={isOpen ? 180 : 0} />
      </aside>
      {isOpen && <aside className="contentCollapses">{content}</aside>}
    </section>
  )
}

export default Collapses
