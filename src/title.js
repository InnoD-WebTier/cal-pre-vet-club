import React, { Component } from 'react';
import "./styles/text.css";

class Title extends Component {
  render() {
    return (
      <div className="titles"> {this.props.name} </div>
    )
  }
}

export default Title;
