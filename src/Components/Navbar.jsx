import React from 'react';
import { useContextGlobal } from '../Context'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();
  
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={`nav ${state.theme}`}>
      <Link to='/'><h1>DH Odonto</h1></Link>
      <div className='button-nav'>
      <Link to='/contact'>Contact</Link>
      <Link to='/favs'>Favs</Link>
      <button onClick={toggleTheme}>Theme {state.theme === "light" ? "Dark" : "Light"}</button>
      </div>
    </nav>
  )
}

export default Navbar;