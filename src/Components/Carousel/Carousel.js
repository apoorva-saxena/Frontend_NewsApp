import React, { Component }from 'react'
// import CarouselItem from 'CarouselItem'

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = { allSources: [] }
  }

  componentWillMount() {
    const allSources = fetch('https://localhost:3000/api/resources', { 'mode': 'no-cors' }).then(res => {
      return res.json()
    }).catch( err => {console.log(err)})
    this.setState({
      allSources
    })
  }

  render() {
    console.log("=============")
    console.log(this.state.allSources)
    return (
      <div>
        {this.state.allSources.map( source => <div key={source.id}>{source.name}</div>)}
      </div>
    )
  }
}


export default Carousel