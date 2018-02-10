import React, {Component} from 'react';
import './App.css';
import Sections from './Components/Sections'
import {BrowserRouter as Router, Route, NavLink, Link, Switch} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News Organiser</h1>
        </header>
        <Sections/>
      </div>
    );
  }
}

class App extends Component { <Router> <div>
  <Links/>
  <Switch>
    <Route exact path="/" render={() => <h1>Home</h1>}/>
    <Route path="/about" render={() => <h1>About</h1>}/>
    <Route render={() => <h1>Page not found</h1>}/>
  </Switch>
</div> </Router>
}

export default App;