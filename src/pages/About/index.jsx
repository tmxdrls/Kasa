import Banner from '../../components/Banner'
import { collapsesData } from '../../datas/collaspsesList'
import Collapses from '../../components/Collapses'

function About() {
  return (
    <div className="About">
      <Banner />
      <main className="mainAbout">
        {collapsesData.map((collapse) => (
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
