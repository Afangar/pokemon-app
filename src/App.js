import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokemonsDetails from './pages/PokemonsDetails/PokemonDetails';
import Home from './pages/HomePage/Home';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pokemons">
        <PokemonsDetails />
      </Route>
    </Switch>
  </Router>
);

export default App;
