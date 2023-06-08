import { Link } from 'react-router-dom'
import '../../styles/Card.css'

function Card({ data }) {
  return (
    <article className="cardContainer">
      <Link to={`/apartments/${data.id}`}>
        <img src={data.cover} alt={data.title} />
        <h2>{data.title}</h2>
      </Link>
    </article>
  )
}

export default Card
