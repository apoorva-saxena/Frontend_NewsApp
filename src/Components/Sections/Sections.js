import React, { Component } from 'react'
import Carousel from '../carousel/Carousel'

class Sections extends Component {
  constructor(props) {
    super(props)
    this.state = { allSources: [] }
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
      .catch(err => { console.log(err) })
  }

  render() {
    console.log(this.state.allSources)
    let categories = []
    let sections = []
    this.state.allSources.map( source => {
      if( !(categories.includes(source.category))) {
        categories.push(source.category)
        sections[source.category][0] = source
      } else {
        sections[source.category].push(source)
      }
    })
    console.log(categories)
    console.log(sections)

    return (
      <div>
        {/* {
          categories.map( category => <div key={category}><h3>{category}</h3><div><Carousel sources={sections[category]}/></div></div>)
        } */}
      </div>
    )
  }
}


export default Sections