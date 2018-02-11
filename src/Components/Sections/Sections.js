import React, {Component} from 'react'
import Carousel from '../carousel/Carousel'

class Sections extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allSources: []
    }
  }

  componentDidMount() {
    fetch('/api/resources/').then(res => {
      return res.json()
    }).then(allSources => {
      this.setState({allSources})
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    let categories = [],
      sections = []
    this
      .state
      .allSources
      .map(source => {
        if (!(categories.includes(source.category))) {
          categories.push(source.category)
          sections[source.category] = []
          sections[source.category].push(source)
        } else {
          sections[source.category].push(source)
        }
      })

    return (
      <div className="container">
        <div className="source-container">
          {categories.map(category => (
            <div>
            <div className="category-header">
              <h3 key={category}>
                <a href={"/"+category}>{category}</a>
              </h3>
              </div>
              <Carousel sources={sections[category]}/>
            </div>
          ))
}
        </div>
        <style jsx>
          {
            ` 
            .container {
              display: inline-block;
            }
            .source-container {
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              width: calc(100% / 6);
            }
            h3 {
              text-transform: uppercase;
            }
            a {
              color: black;
              text-decoration: none;
            }
            a:hover {
              color: #05259D;
            }

            .category-header {
              display:flex;
              justify-content: center;
            }
             `
          }</style>
      </div>
    )
  }
}

export default Sections