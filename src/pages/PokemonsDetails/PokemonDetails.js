import React from "react";
import "./PokemonDetails.scss";

let PokemonsDetails = () => {
  return (
    <section>
      <h1 className="nombre">Nombre</h1>
      <div className="div1">
        <div className="img">IMG</div>
        <div className="descripciones">
          <div className="descripcion">Descripcion</div>
          <div className="stats">Stats</div>
        </div>
      </div>
      <div className="div2">
        <div className="caracteristicas">Caracteristicas</div>
        <div className="type">Type</div>
      </div>
      <div className="habilidades">Habilidades</div>
      <div className="evoluciones">evoluciones</div>
      <div className="botones">Botones</div>
      <footer className="footer">Footer</footer>
    </section>
  );
};

export default PokemonsDetails;
