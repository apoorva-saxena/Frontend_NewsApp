import React, {Component} from 'react'
import Header from '../Header'
import Article from '../Article'

class CountryNews extends Component {
  state = {
    topNews: ''
  }

  componentDidMount() {
    fetch('/api/topNews/' + this.props.match.params.country.toLowerCase()).then(res => {
      return res.json()
    }).then(topNews => {
      this.setState({topNews})
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    const header = "News from " + this.props.match.params.country
    const {topNews} = this.state
    console.log(topNews.articles)
    return (
      <div>
        <Header name={header}/>
        Total News : {topNews.totalResults}
        <div>
          {topNews
            .articles
            .map(tn => <Article article={tn}/>)}
        </div>
      </div>
    )
  }
}

export default CountryNews