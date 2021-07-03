import './App.css';
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Movies from './pages/Movies';
import SingleMovies from './pages/SingleMovie';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/single">
          <SingleMovies />
        </Route>
        <Route path="/">
          <Movies />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
