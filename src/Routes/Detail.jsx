import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContextGlobal } from '../Context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
    const { state: globalState } = useContextGlobal();
    const themeClass = globalState.theme === 'dark' ? 'dark' : 'light';
    const[dentist, setDentist] = useState({})
    const params = useParams()

    useEffect(() =>{
      axios('https://jsonplaceholder.typicode.com/users/' + params.id)
      .then(res => setDentist(res.data)) 
    }, [params.id])
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className={`contact ${themeClass}`}>
      <h1>Detail Dentist id</h1>
      <h3>{dentist.name}</h3>
      <h4>{dentist.email}</h4>
      <h4>{dentist.phone}</h4>
      <h4>{dentist.website}</h4>
      <button>Seleccionar</button>
      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail