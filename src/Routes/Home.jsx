import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useDentistStates } from '../Context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const{state} = useDentistStates();
  // console.log(state);


  return (
    <main className="" >
      <h1>CLINICA ODONTOLOGICA</h1>
      <div className='card-grid'>
        {state.list.map((dentista) => <Card key={dentista.id} item={dentista}/>)}
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home