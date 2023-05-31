import Banner from '../../components/Banner'
import ApartmentList from '../../components/ApartementList'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div className="Accueil">
      <Banner />
      <ApartmentList />
      <Footer />
    </div>
  )
}

export default Home
