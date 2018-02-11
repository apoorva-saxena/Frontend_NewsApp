import React, {Component} from 'react'

class Dropdown extends Component {
  render() {
    const {
      children,
      disabled,
      style,
      uiStyle,
      value,
      ...rest
    } = this.props

    let className = 'container container-' + uiStyle
    if (disabled) {
      className += ' is-disabled'
    }
    if (value) {
      className += ' has-value'
    }

    return (
      <div className={className} style={style}>
        <select disabled={disabled} value={value} {...rest}>
          {children}
        </select>
        <style jsx>{`
        select {
          border: 1px solid #4C120B;
          border-radius: 0;
        }
        `}</style>
      </div>
    )

  }
}

export default Dropdown