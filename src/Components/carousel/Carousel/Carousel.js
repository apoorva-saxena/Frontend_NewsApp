import React, {Component} from 'react'
import CarouselItem from '../CarouselItem'
import PropTypes from 'prop-types'

class Carousel extends Component {
  render() {
    const {sources, type} = this.props
    return (
      <div>
        <div className={type ? "carousel-container-row" : "carousel-container"}>
          {sources.map(source => <CarouselItem
            key={source.id}
            id={source.id}
            name={source.name}
            description={source.description}
            url={source.url}
            language={source.language}
            country={source.au}
            urlsToLogos={source.urlsToLogos}/>)
}
        </div>
        <style jsx>
          {
            ` .carousel-container {
              display: flex;
              flex-direction: column;
            }
            .carousel-container-row {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
            }
             `
          }</style>
      </div>
    )
  }
}

Carousel.propTypes = {
  sources: PropTypes.object
}

export default Carousel