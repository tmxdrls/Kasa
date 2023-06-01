import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

function Collapses({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <article onClick={toggleCollapse}>
      <button className="buttonCollapses">
        {title}
        <FontAwesomeIcon icon={faChevronUp} rotation={isOpen ? 180 : 0} />
      </button>
      {isOpen && <aside>{content}</aside>}
    </article>
  )
}

export default Collapses
