import React from "react";
import {Link} from 'react-router-dom';
import { useContextGlobal } from "../Context";
import imageDoctor from '../img/doctor.jpg'

const Card = ({item}) => {
const { name, username, id } = item
const {state,dispatch} = useContextGlobal() 

  const addFavs = ()=>{
    const favsItems = JSON.parse(localStorage.getItem('favs')) || []
    dispatch({type: 'ADD_CART', payload: item})
    localStorage.setItem('favs', JSON.stringify([...favsItems, item]))
    
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <img width={100} src={imageDoctor} alt="imageDoctor" />
      <Link to={'/detail/' + item.id}><h3>{name}</h3></Link>
      <h4>{username}</h4>
      <h4>{id}</h4>
      <button onClick={addFavs}>Favorito</button>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
        {/* <button onClick={addFav} className="favButton">Add fav</button> */}
    </div>
  );
};

export default Card;
