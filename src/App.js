import React from 'react';
import './App.css'

import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Curriculo from './pages/Curriculo/Curriculo';
import Main from './pages/Main/main';



function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Curriculo" exact component={Curriculo} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
