import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Context';

const Home = () => {
  
  const { state: globalState } = useContextGlobal();


  const themeClass = globalState.theme === 'dark' ? 'dark' : 'light';
  return (
    <main className={`home ${themeClass}`} >
      <h1>ODONTOLOGIC SERVICE</h1>
      <div className='card-grid'>
      {globalState && globalState.list && globalState.list.map((dentista) => <Card key={dentista.id} item={dentista} />)} 
      </div>
    </main>
  )
}
export default Home
