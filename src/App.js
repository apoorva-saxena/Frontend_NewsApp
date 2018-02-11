import React, {Component} from 'react';
import Home from './Components/Home'
import {BrowserRouter as Router, Route, NavLink, Link, Switch} from 'react-router-dom'


const App = () => (
   <Router>
      <Route exact path="/" component={Home} />
  </Router>
)


export default App;