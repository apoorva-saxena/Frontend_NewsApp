import React, {Component} from 'react';
import Home from './Components/Home'
import Category from './Components/Category'
import LatestNews from './Components/LatestNews'
import {BrowserRouter as Router, Route, NavLink, Link, Switch} from 'react-router-dom'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/latestNewsUpdate" component={LatestNews}/>
      <Route path="/:name" component={Category}/>
    </Switch>
  </Router>
)

export default App