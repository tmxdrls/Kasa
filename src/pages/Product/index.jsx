import { useParams } from 'react-router-dom'
import { dataLogement } from '../../datas/apartmentsData'
import Error from '../Error'
//import Info from '../../components/Info'
import Collapses from '../../components/Collapses'
import Carrousel from '../../components/Carrousel'

function Product() {
  const { id } = useParams()
  const logement = dataLogement.getOne(id)
  console.log(logement)
  if (!logement) {
    return <Error />
  } else {
    return (
      <main>
        <Carrousel slides={logement.pictures} />
        <article className="Collapses">
          <Collapses title="Description" content={logement.description} />
          <Collapses
            title="Équipements"
            content={logement.equipments}
            className="collapseEquiments"
          />
        </article>
      </main>
    )
  }
}

export default Product
