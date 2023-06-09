import { useParams } from 'react-router-dom'
import { dataLogement } from '../../datas/apartmentsData'
import Slider from '../../components/Slider'
import Info from '../../components/Info'
import Collapses from '../../components/Collapses'
import Error from '../Error'

function Product() {
  const { id } = useParams()
  const logement = dataLogement.getOne(id)
  if (logement) {
    return (
      <main>
        <Slider slides={logement.pictures} />
        <Info props={logement} />
        <div className="Collapses">
          <Collapses title="Description" content={logement.description} />
          <Collapses title="Équipements" content={logement.equipments} />
        </div>
      </main>
    )
  } else {
    return <Error />
  }
}

export default Product
