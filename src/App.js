import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonsDetails from "./pages/PokemonsDetails/PokemonDetails";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" />
<<<<<<< HEAD
      <Route path="/pokemons/:id">
        <PokemonsDetails />
      </Route>
=======
      
>>>>>>> 35a15ef... crear home
    </Switch>
  </Router>
);

export default App;
