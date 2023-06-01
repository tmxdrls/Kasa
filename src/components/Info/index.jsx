import { apartmentList } from '../../datas/apartmentList'
import Error from '../../pages/Error'

function Info({ id }) {
  const filteredApartments = apartmentList.filter(
    (apartment) => apartment.id === id
  )

  if (filteredApartments.length === 0) {
    return (
      <div>
        <Error />
      </div>
    )
  }

  const apartment = filteredApartments[0]

  function generateStars(rating) {
    const star = '★'
    const emptyStar = '☆'
    const stars = star.repeat(rating)
    const emptyStars = emptyStar.repeat(5 - rating)
    return (
      <aside>
        <span className="star">{stars}</span>
        <span className="emptyStar">{emptyStars}</span>
      </aside>
    )
  }

  return (
    <section className="Info">
      <article>
        <h1>{apartment.title}</h1>
        <h2>{apartment.location}</h2>
        <aside>
          {apartment.tags.map((tag, index) => (
            <aside key={index}>{tag}</aside>
          ))}
        </aside>
      </article>
      <article>
        <aside>
          <h2>{apartment.host.name}</h2>
          <img src={apartment.host.picture} alt="Icone du propriétaire" />
        </aside>
        <aside className="containerStar">
          {generateStars(apartment.rating)}
        </aside>
      </article>
    </section>
  )
}

export default Info
