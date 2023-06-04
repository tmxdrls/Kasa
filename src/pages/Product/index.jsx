import { useParams } from 'react-router-dom'
import { collapses } from '../../datas/collaspsesList'
import { apartmentList } from '../../datas/apartmentList'
import Info from '../../components/Info'
import Collapses from '../../components/Collapses'
import Carrousel from '../../components/Carrousel'

function Product() {
  const { id } = useParams()
  const filteredCollapses = collapses.filter((collapse) => collapse.id <= 2)
  return (
    <main>
      <Carrousel apartmentList={apartmentList} id={id} />
      <Info id={id} />
      <article className="Collapses">
        {filteredCollapses.map((collapse) => (
          <Collapses
            key={collapse.id}
            title={collapse.title}
            content={collapse.content}
          />
        ))}
      </article>
    </main>
  )
}

export default Product
