import React, { Component } from 'react'

export default class Classcomponent extends Component {
  render() {
    
    return (
      <div>
      {this.props.message}, {this.props.name}
      </div>
    )
  }
}
