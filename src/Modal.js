import React, { Component } from 'react';
import Photo from './Photo.js';

const display = {
  display: 'block'
};
const hide = {
  display: 'none'
};

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    }
  }

  render() {
    return(
      <div className="modal" style={this.props.toggle ? display : hide}>
      <div className="modal-content">
        <Photo className="modal__photo" src={this.props.src} />
      </div>
      <div className="overlay">
      	Overlay
      </div>
    </div>
    );

  }
}

export default Modal;