import React from "react";
import Card from "../Components/Card";
import { useDentistStates } from "../Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const favsItem = JSON.parse(localStorage.getItem('favs')) || []

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favsItem.map((dentist)=>  <Card key={dentist.id} item={dentist}/> )}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
