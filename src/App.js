import React, { Component } from 'react';
import './App.css';
import Sections from './Components/Sections'

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

export default App;
