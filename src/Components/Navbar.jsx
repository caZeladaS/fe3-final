import { useState } from 'react';
import React from 'react'
import { Link } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (

      <nav>
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/Favs'><h3>Favs</h3></Link>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={toggleTheme}>Change theme</button>
      </nav>


    
  )
}
const NotFound = () => {
  return <h2>404 - Not Found</h2>;
};
export default Navbar