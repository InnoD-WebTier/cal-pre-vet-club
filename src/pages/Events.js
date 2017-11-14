import React, { Component } from 'react';
import Grid from '../Grid.js';
import '../styles/Events.css';

const items = [
	{ name: 'First General Meeting', url: 'http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Samoyed-2.jpg' },
	{ name: 'Big C Hike + Pieology', url: 'http://cdn.akc.org/Marketplace/Breeds/Pembroke_Welsh_Corgi_SERP.jpg' },
	{ name: '2nd General Meeting', url: 'https://i.ytimg.com/vi/wRx3Uvcktm8/maxresdefault.jpg' }
];

const items1 = [
	{ name: 'Guide Dogs for the Blind', url: 'https://www.thelabradorsite.com/wp-content/uploads/2015/07/yellow-labrador-puppy-garden.jpg' }, 
	{ name: 'Go Bears', url: 'https://cdn.marketplace.akc.org/media/45488/1456977861_4573_8635.jpg' },
];

class Events extends Component {
	render() {
		return(
			<div>
				<div className="title">2015-2016</div>
				<Grid className="album__grid" urls={items} />
				<Grid className="album__grid" urls={items1} />
			</div>
		)
	}
}

export default Events;