import React, { Component } from 'react'
 class Emplist extends Component {
  render() {
    return (
      <React.Fragment>
        <pre>{JSON.stringify(this.props)}</pre>
        <h2>{this.props.name}</h2>
        <h2>{this.props.price}</h2>
        <h2>{this.color[2]}</h2>
      </React.Fragment>
    )
  }
}

export default Emplist
