import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonsDetails from "./pages/PokemonsDetails/PokemonDetails";
import Home from "./pages/HomePage/Home";
import NavBar from "./pages/componentes/nav";
import Pokemomlist from "./pages/Pokemonlist/pokemons"

const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/pokemons">
        <Pokemomlist />
      </Route>
      <Route exact path="/contact" />
      <Route path="/pokemons/:id">
        <PokemonsDetails />
      </Route>
    </Switch>
  </Router>
);

export default App;
