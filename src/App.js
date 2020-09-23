import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import PokemonsDetails from "./pages/PokemonsDetails/PokemonDetails";
=======
import Home from "./pages/pokemons/Home";
>>>>>>> 564b947... fixing home

const App = () => (
  <Router>
    <Switch>
<<<<<<< HEAD
      <Route exact path="/" />
<<<<<<< HEAD
      <Route path="/pokemons/:id">
        <PokemonsDetails />
      </Route>
=======
      
>>>>>>> 35a15ef... crear home
=======
      <Route exact path="/">
        <Home />
      </Route>
>>>>>>> 564b947... fixing home
    </Switch>
  </Router>
);

export default App;
