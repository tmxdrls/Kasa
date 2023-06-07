import { Link } from 'react-router-dom'
import '../../styles/ApartmentList.css'

function ApartmentList({ data }) {
  return (
    <section className="apartmentContainer">
      <Link to={`/apartments/${data.id}`}>
        <img src={data.cover} alt={data.title} />
        <h2>{data.title}</h2>
      </Link>
    </section>
  )
}

export default ApartmentList
