import { Link } from 'react-router-dom'
import '../../styles/Error.css'

function Error() {
  return (
    <main className="mainError">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </main>
  )
}

export default Error
