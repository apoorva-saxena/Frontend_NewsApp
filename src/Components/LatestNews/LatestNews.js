import React, {Component} from 'react'
import Dropdown from '../Dropdown'
import Header from '../Header'

class LatestNews extends Component {
  state = {
    countries: [],
    selectedCountry: ''
  }

  componentDidMount() {
    fetch('/api/countries').then(res => {
      return res.json()
    }).then(countries => {
      this.setState({countries})
    }).catch(err => {
      console.log(err)
    })
  }

  handleChange = (event) => {
    this.setState({selectedCountry: event.target.value})
    this
      .props
      .history
      .push('/topNews/'+ event.target.value)
  }

  render() {
    return (
      <div>
        <Header name="Top Headlines"/>
        <div className="country-dropdown">
          <label htmlFor="country">
            <span className="country-dropdown-label">Select a country:
            </span>
          </label>
          <Dropdown onChange={this.handleChange}>
            {this
              .state
              .countries
              .map(country => <option key={country.name} value={country.code}>
                {country.name}
              </option>)}
          </Dropdown>
        </div>
        <style jsx>
          {
            ` .country-dropdown {
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
