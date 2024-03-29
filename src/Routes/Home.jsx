import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useDentistStates } from '../Context';
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  
  const { state: dentistState } = useDentistStates();
  const { state: globalState } = useContextGlobal();
  // console.log(state);

  const themeClass = state.theme === 'dark' ? 'dark' : 'light';
  return (
    <main className={`contact ${themeClass}`} >
      <h1>CLINICA ODONTOLOGICA</h1>
      <div className='card-grid'>
        {state.list.map((dentista) => <Card key={dentista.id} item={dentista}/>)}
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home