import React, {Component} from 'react';
import Home from './Components/Home'
import Category from './Components/Category'
import {BrowserRouter as Router, Route, NavLink, Link, Switch} from 'react-router-dom'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/:name" component={Category}/>
    </Switch>
  </Router>
)

export default App