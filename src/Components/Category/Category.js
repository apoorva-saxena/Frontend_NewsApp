import React, {Component} from 'react'

class Category extends Component {
  render() {
    console.log(this.props.match.params.name)
    return (
      <div>{this.props.match.params.name}</div>
    )
  }
}

export default Category