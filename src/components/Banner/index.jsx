import { useLocation } from 'react-router-dom'

function Banner() {
  const location = useLocation()
  const isAboutPage = location.pathname === '/about'

  return (
    <header className={isAboutPage ? 'banner-about' : 'banner-home'}>
      {isAboutPage ? null : <h1>Chez vous, partout et ailleurs</h1>}
    </header>
  )
}

export default Banner
