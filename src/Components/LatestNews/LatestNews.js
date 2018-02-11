import React, {Component} from 'react'
import Dropdown from '../Dropdown'
import Header from '../Header'

class LatestNews extends Component {
  state = {
    countries: []
  }
  componentDidMount() {
    fetch('/api/countries').then(res => {
      return res.json()
    }).then( countries => {
      this.setState({countries})
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    console.log(this.state.countries)
    return (
      <div>
        <Header name="Latest News"/>
        <div className="country-dropdown">
          <label htmlFor="country">
            <span className="country-dropdown-label">Select a country: </span>
          </label>
          <Dropdown>
            {this.state.countries.map(country => <option> {country.name} </option>)}
          </Dropdown>
        </div>
        <style jsx>
          {
            `
            .country-dropdown {
              display: flex;
              margin-top: 24px;
              justify-content: center;
            }

            label {
              margin-right: 16px;
            }

            .country-dropdown-label {
              font: Reithsans;
              font-size: 16px;
            }

            `
          }</style>
      </div>
    )
  }
}

export default LatestNews
