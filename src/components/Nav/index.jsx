import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import '../../styles/Nav.css'

function Nav() {
  const location = useLocation()

  const activeLink = (path) => {
    return !(location.pathname === path)
  }
  return (
    <nav>
      <img src={Logo} alt="Logo de Kasa" className="navLogo" />
      <article className="Navigation">
        <Link to="/" className={activeLink('/') ? 'active' : 'home'}>
          Accueil
        </Link>
        <Link to="/about" className={activeLink('/about') ? 'active' : 'about'}>
          A propos
        </Link>
      </article>
    </nav>
  )
}

export default Nav
