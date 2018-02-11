import React, {Component} from 'react'
import Header from '../Header'

class Category extends Component {
  render() {
    return (
      <div>
        <Header name={this.props.match.params.name}/>
      </div>
    )
  }
}

export default Category