import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
        <label htmlFor="name">Nombre</label>
        <input id="name"  type="text" required />
        <label htmlFor="email">Email</label>
        <input id="email"  type="email" required />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default Form;
