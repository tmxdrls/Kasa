import { apartmentList } from '../../datas/apartmentList'
import { Link } from 'react-router-dom'
import '../../styles/ApartmentList.css'

function ApartmentList() {
  return (
    <main className="mainHome">
      {apartmentList.map((apartment) => (
        <section key={apartment.id} className="apartmentContainer">
          <Link to={`/apartments/${apartment.id}`}>
            <img src={apartment.cover} alt={apartment.title} />
            <h2>{apartment.title}</h2>
          </Link>
        </section>
      ))}
    </main>
  )
}

export default ApartmentList
