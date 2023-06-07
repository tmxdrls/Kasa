import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import { dataLogement } from '../../datas/apartmentsData'
import ApartmentList from '../../components/ApartementList'

function Home() {
  const [logs, setlogs] = useState([])
  useEffect(() => {
    setlogs(dataLogement.getAll())
  }, [])
  console.log(logs)
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
