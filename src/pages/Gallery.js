import React, { Component } from 'react';
import Grid from '../components/Grid.js';
import Modal from '../components/Modal.js';
import Disclaimer from '../components/Disclaimer';
import '../styles/css/Gallery.css';

const items = [
  { name: 'Merchandise', url: "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/Merchandise/PVC Mug (white) - $7/2.jpg"},
  { name: '2018-2019', url: '/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2018-2019/Suture-Workshop/4.jpg'},
  { name: '2017-2018', url: 'http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Samoyed-2.jpg'},
  { name: '2016-2017', url: 'http://cdn.akc.org/Marketplace/Breeds/Pembroke_Welsh_Corgi_SERP.jpg' },
  { name: '2015-2016', url: 'https://i.ytimg.com/vi/wRx3Uvcktm8/maxresdefault.jpg' }, 
  { name: '2014-2015', url: 'https://www.thelabradorsite.com/wp-content/uploads/2015/07/yellow-labrador-puppy-garden.jpg' }, 
];

class Gallery extends Component {
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
  }

  render() {
    return(
      <div className="gallery">
        <div className="title">Photo Gallery</div>
        <Grid className="album__grid" callbackFromParent={ this.callback } urls={ items } />
        <Disclaimer />
      </div>
    )
  }
}

export default Gallery;