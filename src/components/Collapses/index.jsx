import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import '../../styles/Collapses.css'

function Collapses({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <article onClick={toggleCollapse} className="containerCollapse">
      <section className="bannerCollapse">
        <h3>{title}</h3>
        <FontAwesomeIcon
          icon={faChevronUp}
          className="iconeCollapse"
          rotation={isOpen ? 180 : 0}
        />
      </section>
      {isOpen && (
        <section className="contentCollapses">
          {Array.isArray(content) ? (
            content.map((item, index) => <aside key={index}>{item}</aside>)
          ) : (
            <aside>{content}</aside>
          )}
        </section>
      )}
    </article>
  )
}

export default Collapses
