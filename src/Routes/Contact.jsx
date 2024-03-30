import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../Context' 

const Contact = () => {
  const { state } = useContextGlobal();

  const themeClass = state.theme === 'dark' ? 'dark' : 'light';

  return (
    <div className={`form ${themeClass}`}>
      <h1>Want to know more?</h1>
      <Form/>
    </div>
  )
}

export default Contact