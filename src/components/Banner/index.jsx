import '../../styles/Banner.css'

function Banner({ className, text }) {
  return (
    <header className={className}>
      <p>{text}</p>
    </header>
  )
}

export default Banner
