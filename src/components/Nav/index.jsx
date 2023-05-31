import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <img
        src="../../assets/logo.png"
        alt="Logo de Kasa"
        className="nav-logo"
      />
      <div className="Navigation">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </div>
    </nav>
  )
}

export default Nav
