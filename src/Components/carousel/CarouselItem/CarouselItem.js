import React, {Component} from 'react'
import backupImage from '../../../images/news.jpg'
import PropTypes from 'prop-types'

class CarouselItem extends Component {

  render() {
    const {
      id,
      name,
      description,
      url,
      language,
      country,
      urlsToLogos
    } = this.props
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
            <img src={backupImage}/>
            <div className="description">{description}</div>
            <div className="name">{name}</div>
          </a>
        </div>
        <style jsx>
          {
            ` img {
              width: 212px;
              height: 148px;
              margin-bottom: 16px;
            }
            a {
              text-decoration: none;
            }
            .description {
              color: #0E1CA4;
              width: 240px;
              font-size: 16px;
              margin-bottom: 16px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              font: reithsans;
            }
            .description:hover {
              text-decoration: underline;
            }
            .name {
              color: #29632B;
              margin: 0 0 24px;
              font-size: 14px;
            }
            .news-container {
              border: 1px solid #DCDCDC;
              margin: 8px 11px;
              padding: 8px;
            }
            `
          }
</style>
      </div>
    )
  }
}

CarouselItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  language: PropTypes.string,
  country: PropTypes.string,
  urlsToLogos: PropTypes.string
}

export default CarouselItem