import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonsDetails from "./pages/PokemonsDetails/PokemonDetails";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" />
      <Route path="/pokemons/:id">
        <PokemonsDetails />
      </Route>
    </Switch>
  </Router>
);

export default App;
