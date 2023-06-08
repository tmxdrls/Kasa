import { Link } from 'react-router-dom'
import '../../styles/ApartmentList.css'

function ApartmentList({ data }) {
  return (
    <article className="apartmentContainer">
      <Link to={`/apartments/${data.id}`}>
        <img src={data.cover} alt={data.title} />
        <h2>{data.title}</h2>
      </Link>
    </article>
  )
}

export default ApartmentList
