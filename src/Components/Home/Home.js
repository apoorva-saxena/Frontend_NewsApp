import React, {Component} from 'react';
import Sections from '../Sections'
import Header from '../Header'

class Home extends Component {

  render() {
    return (
      <div className="home">
        <Header name="Home"/>
        <Sections/>
      </div>
    );
  }
}

export default Home