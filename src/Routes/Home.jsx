import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const[list, setList] = useState([]);

  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => setList(res.data))
  }, [])



  return (
    <main className="" >
      <h1>CHARLY'S CLINIC</h1>
      <div className='card-grid'>
        {list.map((dentista) => <Card key={dentista.id} item={dentista}/>)}
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home