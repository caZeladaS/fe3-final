import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  
  const { state: globalState } = useContextGlobal();
  // console.log(state);

  const themeClass = globalState.theme === 'dark' ? 'dark' : 'light';
  return (
    <main className={`contact ${themeClass}`} >
      <h1>CLINICA ODONTOLOGICA</h1>
      <div className='card-grid'>
      {globalState && globalState.list && globalState.list.map((dentista) => <Card key={dentista.id} item={dentista} />)} 
      {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}
export default Home
