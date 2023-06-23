import { useLocation } from 'react-router-dom'
import '../../styles/Banner.css'

function Banner() {
  const location = useLocation()
  const isAboutPage = location.pathname === '/about'

  return (
    <header className={isAboutPage ? 'bannerAbout' : 'bannerDefault'}>
      {isAboutPage ? null : <p>Chez vous, partout et ailleurs</p>}
    </header>
  )
}

export default Banner
