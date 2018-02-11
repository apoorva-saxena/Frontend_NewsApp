import React, {Component} from 'react'
import Header from '../Header'
import Carousel from '../carousel/Carousel'

class Category extends Component {
  state = {
    sectionData: []
  }
  componentDidMount () {
    const url = '/api/resources/'+this.props.match.params.name
    fetch(url).then(res => {
      return res.json()
    }).then(sectionData => {
      this.setState({sectionData})
    })
  }
  render() {
    return (
      <div>
        <Header name={this.props.match.params.name}/>
        <Carousel sources={this.state.sectionData} type="row"/>
      </div>
    )
  }
}

export default Category