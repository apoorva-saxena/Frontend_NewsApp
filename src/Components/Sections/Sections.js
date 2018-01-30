import React, {
  Component
} from 'react'
import Carousel from '../carousel/Carousel'

class Sections extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allSources: []
    }
  }

  componentDidMount() {
    fetch('/api/resources/')
      .then(res => {
        return res.json()
      })
      .then(allSources => {
        this.setState({
          allSources
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    let categories = [],
      sections = []
    this.state.allSources.map(source => {
      if (!(categories.includes(source.category))) {
        categories.push(source.category)
        sections[source.category] = []
        sections[source.category].push(source)
      } else {
        sections[source.category].push(source)
      }
    })

    console.log(sections)
    return (
      <div>
        {
          categories.map( category => (
            <div>
              <h3 key={category}>{category}</h3>
              <Carousel sources={sections[category]}/>
            </div>
          ))
        }
      </div>
    )
  }
}


export default Sections