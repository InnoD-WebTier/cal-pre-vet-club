import React, { Component } from 'react';
import Modal from './Modal.js'

class Photo extends Component {
	constructor(props) {
		super(props);
		this.state = { isClicked: false };
	}

	toggleClicked = () => {
		this.setState({
			isClicked: true
		}, () => {
			this.props.callbackFromParent(this.state.isClicked, this.props.src);
		});
	} 

	render() {
		return (
			<div className={this.props.className}>
				<img src={this.props.src} onClick={this.toggleClicked} />
				<div className="label">
					{this.props.name}
				</div>
			</div>
		)
	}
}

export default Photo;