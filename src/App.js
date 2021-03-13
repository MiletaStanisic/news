import React from 'react';
import { Route, Switch } from 'react-router';
import { ToastContainer } from 'react-toastify';

import Home from './pages/home';
import Article from './pages/article';
import PageNotFound from './pages/404page';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'font-awesome/css/font-awesome.min.css';
import SearchNews from './pages/search';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchNews} />
        <Route exact path="/article/:id" component={Article} />
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  );
}

export default App;
