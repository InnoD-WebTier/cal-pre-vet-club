import React, { Component } from 'react';
import Photo from '../Photo.js';
import Modal from '../Modal.js';
import Grid from '../Grid.js';
import '../styles/css/Gallery.css';

// A base file for all your pages to come together.

const items = [
	{ url: 'http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Samoyed-2.jpg' },
	{ url: 'http://cdn.akc.org/Marketplace/Breeds/Pembroke_Welsh_Corgi_SERP.jpg' },
	{ url: 'https://i.ytimg.com/vi/wRx3Uvcktm8/maxresdefault.jpg' }, 
	{ url: 'https://www.thelabradorsite.com/wp-content/uploads/2015/07/yellow-labrador-puppy-garden.jpg' }, 
	{ url: 'https://cdn.marketplace.akc.org/media/45488/1456977861_4573_8635.jpg' },
	{ url: 'https://cdn.marketplace.akc.org/media/45488/1456977861_4573_8635.jpg' }
];

class App extends Component {

	constructor(props) {
	    super(props);

	    this.state = { 
	    	isOpen: false,
	    	isPhotoClicked: false,
	    	currPhoto: null
	    };
	}

	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})

	}

	callback = (isClicked, photoSrc) => {
		this.setState({ 
			isPhotoClicked: isClicked,
			currPhoto: photoSrc 
		});
		console.log(isClicked);
	}

	render() {
		return(
			<div>
				<div className="title">PUMPKIN CARVING SOCIAL [FALL 2014]</div>
				<Grid className="gallery__grid" callbackFromParent={this.callback} urls={items} />
				<Modal className="modal" src={this.state.currPhoto} toggle={this.state.isPhotoClicked} />
			</div>
		)
	}
}

export default App;
