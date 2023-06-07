import '../../styles/Info.css'

function Info({ props }) {
  function generateStars(rating) {
    const star = '★'
    const emptyStar = '☆'
    const stars = star.repeat(rating)
    const emptyStars = emptyStar.repeat(5 - rating)
    return (
      <div className="hostStar">
        <span className="star">{stars}</span>
        <span className="emptyStar">{emptyStars}</span>
      </div>
    )
  }

  return (
    <section className="Info">
      <article className="apartementDescription">
        <h1>{props.title}</h1>
        <h2>{props.location}</h2>
        <aside className="tagContainer">
          {props.tags.map((tag, index) => (
            <aside key={index} className="tag">
              {tag}
            </aside>
          ))}
        </aside>
      </article>
      <article className="hostDescription">
        <aside className="hostPicture">
          <h2>{props.host.name}</h2>
          <img src={props.host.picture} alt="Icone du propriétaire" />
        </aside>
        <aside>{generateStars(props.rating)}</aside>
      </article>
    </section>
  )
}

export default Info
