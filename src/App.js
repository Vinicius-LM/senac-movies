import './App.css';
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import SingleMovies from './pages/SingleMovie';
import PersistentDrawerLeft from './PersistentDrawerLeft';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/single">
          <SingleMovies />
        </Route>
        <Route path="/">
          <PersistentDrawerLeft />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
