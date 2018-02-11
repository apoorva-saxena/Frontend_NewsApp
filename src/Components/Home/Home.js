import React, {Component} from 'react';
import Sections from '../Sections'

class Home extends Component {

  render() {
    return (
      <div className="home">
        <header className="home-header">
          <h1 className="home-title">News Organiser</h1>
        </header>
        <Sections/>
        <style jsx>
          {
            ` .home {
              text-align: center;
            }

            .home-header {
              background-color: #222;
              height: 40px;
              padding: 20px;
              color: white;
            }

            .home-title {
              font-size: 1.25em;
              font: reithsans;
              float: left;
              text-transform: uppercase;
            }
             `
          }</style>
      </div>
    );
  }
}

export default Home