import { useLocation } from 'react-router-dom'
import '../../styles/Banner.css'

function Banner() {
  const location = useLocation()
  const isAboutPage = location.pathname === '/about'

  return (
    <header className={isAboutPage ? 'bannerAbout' : 'bannerHome'}>
      {isAboutPage ? null : <h1>Chez vous, partout et ailleurs</h1>}
    </header>
  )
}

export default Banner
