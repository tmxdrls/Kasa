import Banner from '../../components/Banner'
import Collapses from '../../components/Collapses'
import { collapses } from '../../datas'

function About() {
  const filteredCollapses = collapses.filter((collapse) => collapse.id > 2)
  return (
    <div className="About">
      <Banner />
      <main className="mainAbout">
        {filteredCollapses.map((collapse) => (
          <Collapses
            key={collapse.id}
            title={collapse.title}
            content={collapse.content}
          />
        ))}
      </main>
    </div>
  )
}

export default About
