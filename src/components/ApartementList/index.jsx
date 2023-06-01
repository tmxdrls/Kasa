import { apartmentList } from '../../datas/apartmentList.js'
import { Link } from 'react-router-dom'

function ApartmentList() {
  return (
    <main>
      {apartmentList.map((apartment) => (
        <section key={apartment.id}>
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
