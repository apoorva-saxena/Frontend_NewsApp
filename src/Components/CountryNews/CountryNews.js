import React, {Component} from 'react'
import Header from '../Header'

class CountryNews extends Component {
  state = {
    topNews: ''
  }

  componentDidMount() {
    fetch('/api/topNews/' + this.props.match.params.country.toLowerCase()).then(res => {
      return res.json()
    })
      .then(topNews => {
      this.setState({topNews})
    })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    console.log(" I reach in the country news")
    const {country} = this.props.match.params.country
    console.log(this.state.topNews)
    const header = "News from " + country
    return (
      <div>
        <Header name={header}/>
      </div>
    )
  }
}

export default CountryNews