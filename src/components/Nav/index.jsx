import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import '../../styles/Nav.css'

function Nav() {
  return (
    <nav>
      <img src={Logo} alt="Logo de Kasa" className="navLogo" />
      <article className="Navigation">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </article>
    </nav>
  )
}

export default Nav
