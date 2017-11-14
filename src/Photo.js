import React, { Component } from 'react';

class Photo extends Component {
	render() {
		return (
			<div className={this.props.className}>
				<img src={this.props.src}/>
				<div className="label">
					{this.props.name}
				</div>
			</div>
		)
	}
}

export default Photo;