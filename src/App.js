import React, {Component} from 'react';
import Home from './Components/Home'
import Category from './Components/Category'
import LatestNews from './Components/LatestNews'
import CountryNews from './Components/CountryNews'
import {BrowserRouter as Router, Route, NavLink, Link, Switch} from 'react-router-dom'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/latestNewsUpdate" component={LatestNews}/>
      <Route path="/:name" component={Category}/>
      <Route exact path="/topNews/:country" component={CountryNews}/>
    </Switch>
  </Router>
)

export default App