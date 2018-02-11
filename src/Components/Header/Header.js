import React, {Component} from 'react'
import homeImage from '../../images/home.png'


class Header extends Component {
  render() {
    const {name} = this.props
    return (
      <div className="header-container">
        <header className="header">
          <h1 className="title">{name}</h1>
          {name !== "Home" && <div className="home-link-container">
            <a href={"/"}><img className="home-image"src={homeImage}/></a>
          </div>
          }
        </header>
        <style jsx>
          {
            ` .header-container {
              text-align: center;
            }

            .header {
              background-color: #222;
              height: 40px;
              padding: 20px;
              color: white;
            }

            .title {
              font-size: 1.25em;
              font: reithsans;
              float: left;
              text-transform: uppercase;
            }

            .home-link-container {
              float:right;
            }

            a {
              color: white;
              margin-right: 24px;
              
            }

            .home-image {
              height: 30px;
              width: 30px;
            }

             `
          }</style>
      </div>
    )
  }
}

export default Header