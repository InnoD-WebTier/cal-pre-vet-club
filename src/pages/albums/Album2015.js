import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import Grid from '../../components/Grid.js';
import '../../styles/css/Albums.css';

const Fundraiser = [
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Fundraiser/1.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Fundraiser/2.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Fundraiser/3.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Fundraiser/4.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Fundraiser/5.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Fundraiser/6.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Fundraiser/7.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Fundraiser/8.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Fundraiser/9.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Fundraiser/10.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Fundraiser/11.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Fundraiser/12.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Fundraiser/13.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Fundraiser/14.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Fundraiser/15.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Fundraiser/16.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Fundraiser/17.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Fundraiser/18.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Fundraiser/19.jpg"
];

const GM = [
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/GM/1.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/GM/2.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/GM/3.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/GM/4.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/GM/5.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/GM/6.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/GM/7.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/GM/8.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/GM/9.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/GM/10.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/GM/11.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/GM/12.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/GM/13.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/GM/14.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/GM/15.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/GM/16.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/GM/17.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/GM/18.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/GM/19.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/GM/20.jpg"
];

const Social = [
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Social/1.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Social/2.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Social/3.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Social/4.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Social/5.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Social/6.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Social/7.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Social/8.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2015-2016/Social/9.jpg"
];


class Album2015 extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div class="album__container">
        <div class="title">2015 - 2016</div>

        <div class="album__title">Fundraiser</div>
        <Carousel slides={Fundraiser} showArrows={true} showIndicators={false} />

        <div class="album__title">GM</div>
        <Carousel slides={GM} showArrows={true} showIndicators={false} /> 

        <div class="album__title">Social</div>
        <Carousel slides={Social} showArrows={true} showIndicators={false} /> 
      </div>
    )
  }
}

export default Album2015;