import React from "react";
import Form from "../componentes/form";
import Carrusel from "../componentes/carrusel";
import Cards from "../componentes/homecards";

const Home = () => (
  <section>
    <Carrusel />
    <Cards />
    <Form />
  </section>
);

export default Home;
