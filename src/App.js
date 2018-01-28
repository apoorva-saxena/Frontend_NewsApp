import React, { Component } from 'react';
import './App.css';
import Carousel from './Components/Carousel'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News Flip</h1>
        </header>
        <Carousel/>
      </div>
    );
  }
}

export default App;
