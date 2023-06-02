import Logo from '../../assets/logo-white.png'
import '../../styles/Footer.css'

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Logo de Kasa" className="footer-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
