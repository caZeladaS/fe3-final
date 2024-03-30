import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const favsItem = JSON.parse(localStorage.getItem('favs')) || []
  const { state: globalState } = useContextGlobal();
  const themeClass = globalState.theme === 'dark' ? 'dark' : 'light';

  return (
    <div className={`${themeClass}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favsItem.map((dentist)=>  <Card key={dentist.id} item={dentist}/> )}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
