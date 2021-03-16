import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { About } from "./components/Register/About";
import { Register } from "./components/Register/register";
import { Login } from './components/Register/index';
import { Profile } from './components/Profile/Logic';
import { Shows } from './components/Shows';

import PageError from './components/PageError';
import Home from './components/Home';
import CreateShow from "./components/CreateShows/Shows";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/eventos" component={Shows} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/crearshow" component={CreateShow} />
        <Route component={PageError} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;