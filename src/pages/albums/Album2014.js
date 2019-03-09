import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import Grid from '../../components/Grid.js';
import '../../styles/css/Albums.css';

const Fundraisers = [
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2014-2015/Fundraisers/1.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2014-2015/Fundraisers/2.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2014-2015/Fundraisers/3.jpg"
];

const GM = [
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2014-2015/GM/1.jpg"
];

const Social = [
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2014-2015/Social/1.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2014-2015/Social/2.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2014-2015/Social/3.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2014-2015/Social/4.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2014-2015/Social/5.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2014-2015/Social/6.jpg"
];


class Album2014 extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div class="album__container">
        <div class="title">2014 - 2015</div>

        <div class="album__title">Fundraisers</div>
        <Carousel slides={Fundraisers} showArrows={true} showIndicators={false} />

        <div class="album__title">GM</div>
        <Carousel slides={GM} showArrows={true} showIndicators={false} /> 

        <div class="album__title">Social</div>
        <Carousel slides={Social} showArrows={true} showIndicators={false} /> 
      </div>
    )
  }
}

export default Album2014;