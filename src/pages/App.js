import React, { Component } from 'react';
import Grid from '../Grid.js';

// A base file for all your pages to come together.

const items = [
	{ url: 'http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Samoyed-2.jpg' },
	{ url: 'http://cdn.akc.org/Marketplace/Breeds/Pembroke_Welsh_Corgi_SERP.jpg' },
	{ url: 'https://i.ytimg.com/vi/wRx3Uvcktm8/maxresdefault.jpg' }
];

const items1 = [
	{ url: 'https://www.thelabradorsite.com/wp-content/uploads/2015/07/yellow-labrador-puppy-garden.jpg' }, 
	{ url: 'https://cdn.marketplace.akc.org/media/45488/1456977861_4573_8635.jpg' },
	{ url: 'https://cdn.marketplace.akc.org/media/45488/1456977861_4573_8635.jpg' }
];

class App extends Component {
  render() {
		return(
			<div>
				<div className="title">Pumpkin Carving Social</div>
				<Grid className="gallery__grid" urls={items} />
				<Grid className="gallery__grid" urls={items1} />
			</div>
		)
	}
}

export default App;
