import '../../styles/Info.css'

function Info({ props }) {
  function generateStars(rating) {
    const star = '★'
    const emptyStar = '☆'
    const stars = star.repeat(rating)
    const emptyStars = emptyStar.repeat(5 - rating)
    return (
      <div>
        <span className="star">{stars}</span>
        <span className="emptyStar">{emptyStars}</span>
      </div>
    )
  }

  return (
    <article className="Info">
      <section className="apartementDescription">
        <h1>{props.title}</h1>
        <h2>{props.location}</h2>
        <aside className="tagContainer">
          {props.tags.map((tag, index) => (
            <aside key={index} className="tag">
              {tag}
            </aside>
          ))}
        </aside>
      </section>
      <section className="hostDescription">
        <aside className="hostPicture">
          <h2>{props.host.name}</h2>
          <img src={props.host.picture} alt="Icone du propriétaire" />
        </aside>
        <aside className="hostStar">{generateStars(props.rating)}</aside>
      </section>
    </article>
  )
}

export default Info
