import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../Context' 

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContextGlobal();

  const themeClass = state.theme === 'dark' ? 'dark' : 'light';

  return (
    <div className={`contact ${themeClass}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact