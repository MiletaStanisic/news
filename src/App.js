import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './pages/home';
import Article from './pages/article';
import PageNotFound from './pages/404page';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/article/:id" component={Article} />
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  );
}

export default App;
