import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" />
    </Switch>
  </Router>
);

export default App;
