import React from 'react'
import imageFooter from '../img/DH.png'
import { useContextGlobal } from '../Context';

const Footer = () => {
  const { state } = useContextGlobal();
  
  return (
    <footer className={`${state.theme}`}>
        <p>Powered by </p>
        <img src= {imageFooter} alt='DH-logo' />
    </footer>
  )
}

export default Footer
