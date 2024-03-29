import React from 'react';
import { useContextGlobal } from '../Context'; // Importación del hook personalizado
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();
  
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={`navbar ${state.theme}`}>
      <h1>DH Odonto</h1>
        <Link to='/'>Home</Link>
        <Link to='/detail'>Details</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/favs'>Favs</Link>
        <button onClick={toggleTheme}>Cambiar de tema a {state.theme === "light" ? "Oscuro" : "Claro"}</button>
    </nav>
  )
}

export default Navbar;