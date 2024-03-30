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

  return (
    <div className={`card-detail ${themeClass}`}>
      <code>Detail Dentist</code>
      <code>{dentist.name}</code>
      <code>{dentist.email}</code>
      <code>{dentist.phone}</code>
      <code>{dentist.website}</code>
      
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail