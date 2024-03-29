import React from "react";
import {Link} from 'react-router-dom';
import { useDentistStates } from "../Context";

const Card = ({item}) => {
const { name, username, id } = item
const {dispatch} = useDentistStates() 

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <img src="../img/doctor.jpg" alt="" />
      <Link to={'/detail/' + item.id}><h3>{name}</h3></Link>
      <h4>{username}</h4>
      <h4>{id}</h4>
      <button onClick={() => dispatch({type: 'ADD_FAVS', payload: item})}>Favorito</button>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
        {/* <button onClick={addFav} className="favButton">Add fav</button> */}
    </div>
  );
};

export default Card;
