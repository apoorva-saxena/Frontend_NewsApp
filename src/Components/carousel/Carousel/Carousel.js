import React, { Component }from 'react'
// import CarouselItem from 'CarouselItem'

class Carousel extends Component {

  render() {
    const {sources} = this.props
    console.log("=============1")
    console.log(sources)
    return (
      <div>
        {
          sources.map(source => <span key={source.id}>{source.name}{'   $$    '}</span>)
        }
      </div>
    )
  }
}


export default Carousel