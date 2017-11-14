import React, { Component } from 'react';
import Photo from './Photo.js';

class Grid extends Component {
	render() {
		const gridElements = this.props.urls.map((grid) => 
				<Photo src={grid.url} name={grid.name} className="grid__photo"/>
		);

		return (
			<div className={this.props.className}>{gridElements}</div>
		);
	}
}

export default Grid;