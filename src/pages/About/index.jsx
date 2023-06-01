import Banner from '../../components/Banner'
import Collapses from '../../components/Collapses'
import { collapses } from '../../datas'

function About() {
  const filteredCollapses = collapses.filter((collapse) => collapse.id > 2)
  return (
    <main className="About">
      <Banner />
      {filteredCollapses.map((collapse) => (
        <Collapses
          key={collapse.id}
          title={collapse.title}
          content={collapse.content}
        />
      ))}
    </main>
  )
}

export default About
