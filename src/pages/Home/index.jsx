import { useEffect, useState } from 'react'
import { dataLogement } from '../../datas/apartmentsData'
import Banner from '../../components/Banner'
import Card from '../../components/Card'

function Home() {
  const [logs, setlogs] = useState([])
  useEffect(() => {
    setlogs(dataLogement.getAll())
  }, [])
  return (
    <div className="Accueil">
      <Banner className="bannerDefault" text="Chez vous, partout et ailleurs" />
      <main className="mainHome">
        {logs.map((log) => (
          <Card key={log.id} data={log} />
        ))}
      </main>
    </div>
  )
}

export default Home
