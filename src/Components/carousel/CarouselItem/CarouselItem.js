import React, { Component } from 'react'
import backupImage from '../../../images/news.jpg'

class CarouselItem extends Component {

  render() {
    const { id, name, description, url, language, country, urlsToLogos } = this.props
    let imageUrl = backupImage
    if (urlsToLogos.small) {
      imageUrl = urlsToLogos.small
    } else if (urlsToLogos.medium) {
      imageUrl = urlsToLogos.medium
    } else if (urlsToLogos.large) {
      imageUrl = urlsToLogos.large
    }
    return (
      <div>
        <div className="news-container">
          <a href={url}>
            <img src={backupImage} />
            <div className="description">{description}</div>
            <div className="name">{name}</div>
          </a>
        </div>
        <style jsx>{`
          img {
            width: 100px;
            height: 50px;
          }
          a {
            text-decoration: none;
          }
          .description {
            color: #0E1CA4;
            text-overflow: ellipsis;
          }
          .name {
            color: #29632B;
          }
          .news-container {
            border : 1px solid #DCDCDC;
          }
        `}</style>
      </div>)
  }
}

export default CarouselItem