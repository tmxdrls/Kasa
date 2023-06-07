import Banner from '../../components/Banner'
import Collapses from '../../components/Collapses'
import { collapsesData } from '../../datas/collaspsesList'

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
