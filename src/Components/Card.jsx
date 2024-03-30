import React from "react";
import {Link} from 'react-router-dom';
import { useContextGlobal } from "../Context";
import imageDoctor from '../img/doctor.jpg'

const Card = ({item}) => {
const { name, username, id } = item
const {state,dispatch} = useContextGlobal() 

  const addFavs = ()=>{
    const favsItems = JSON.parse(localStorage.getItem('favs')) || [];
    const isAlreadyFav = favsItems.some(fav => fav.id === item.id);
    if (!isAlreadyFav) {
      const newFavs = [...favsItems, item];
      localStorage.setItem('favs', JSON.stringify(newFavs));
      dispatch({ type: 'ADD_FAV', payload: item });
      alert(`El dentista ${name} fue agregado correctamente a favoritos.`);
    }
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <img width={100} src={imageDoctor} alt="imageDoctor" />
      <Link to={'/detail/' + item.id}><code>{name}</code></Link>
      <code>{username}</code>
      <code>{id}</code>
      <button onClick={addFavs}>Favorite</button>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
        {/* <button onClick={addFav} className="favButton">Add fav</button> */}
    </div>
  );
};

export default Card;
