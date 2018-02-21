import React, {Component} from 'react'

class Article extends Component {
  render() {
    const {article} = this.props
    return (
      <div className="article-container">
        <a href={article.url}>
          <img src={article.urlToImage}/>
            {article.title}
        </a>
        <style jsx>
          {
            ` 
            img {
              height: 300px;
            }

            .article-container {
              padding: 8px;
            }

            .title{
              color: black;
            }
            `
          }
</style>
      </div>
    )
  }
}

export default Article