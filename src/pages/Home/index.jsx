import { useEffect, useState } from 'react'
import { dataLogement } from '../../datas/apartmentsData'
import Banner from '../../components/Banner'
import ApartmentList from '../../components/ApartmentList'

function Home() {
  const [logs, setlogs] = useState([])
  useEffect(() => {
    setlogs(dataLogement.getAll())
  }, [])
  return (
    <div className="Accueil">
      <Banner />
      <main className="mainHome">
        {logs.map((log) => (
          <ApartmentList key={log.id} data={log} />
        ))}
      </main>
    </div>
  )
}

export default Home
