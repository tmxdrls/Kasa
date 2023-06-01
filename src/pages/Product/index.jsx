import { useParams } from 'react-router-dom'
import Info from '../../components/Info'
import Collapses from '../../components/Collapses'
import { collapses } from '../../datas'
import Carrousel from '../../components/Carrousel'
import { apartmentList } from '../../datas/apartmentList'

function Product() {
  const { id } = useParams()
  const filteredCollapses = collapses.filter((collapse) => collapse.id <= 2)
  return (
    <main>
      <Carrousel apartmentList={apartmentList} id={id} />
      <Info id={id} />
      <section className="Collapses">
        {filteredCollapses.map((collapse) => (
          <Collapses
            key={collapse.id}
            title={collapse.title}
            content={collapse.content}
          />
        ))}
      </section>
    </main>
  )
}

export default Product
