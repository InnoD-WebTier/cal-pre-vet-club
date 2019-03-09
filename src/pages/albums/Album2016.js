import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import Grid from '../../components/Grid.js';
import '../../styles/css/Albums.css';

const Workshop = [
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Workshop/1.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Workshop/2.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Workshop/3.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Workshop/4.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Workshop/5.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Workshop/6.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Workshop/7.jpg"
];

const Banquet = [
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Banquet/1.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Banquet/2.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Banquet/3.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Banquet/4.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Banquet/5.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Banquet/6.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Banquet/7.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Banquet/8.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Banquet/9.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Banquet/10.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Banquet/11.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Banquet/12.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Banquet/13.jpg"
];

const GM = [
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/GM/1.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/GM/2.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/GM/3.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/GM/4.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/GM/5.jpg"
];

const Aquarium = [
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Aquarium/1.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Aquarium/2.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Aquarium/3.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Aquarium/4.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Aquarium/5.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Aquarium/6.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Aquarium/7.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Aquarium/8.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Aquarium/9.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Aquarium/10.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Aquarium/11.jpg"
];

const Other = [
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Other/1.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Other/2.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Other/3.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Other/4.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Other/5.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Other/6.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Other/7.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Other/8.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Other/9.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Other/10.jpg"
];

const Social = [
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Social/1.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Social/2.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Social/3.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Social/4.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Social/5.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Social/6.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Social/7.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/Social/8.jpg"
];

const UCDSVMFieldTrip = [
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/UCD-SVM-Field-Trip/1.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/UCD-SVM-Field-Trip/2.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/UCD-SVM-Field-Trip/3.jpg",
  "/Users/kwokcasey17/Desktop/cal-pre-vet-club/src/images/2016-2017/UCD-SVM-Field-Trip/4.jpg"
];


class Album2016 extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div class="album__container">
        <div class="title">2016 - 2017</div>

        <div class="album__title">Aquarium</div>
        <Carousel slides={Aquarium} showArrows={true} showIndicators={false} />

        <div class="album__title">Banquet</div>
        <Carousel slides={Banquet} showArrows={true} showIndicators={false} /> 

        <div class="album__title">GM</div>
        <Carousel slides={GM} showArrows={true} showIndicators={false} /> 

        <div class="album__title">Other</div>
        <Carousel slides={Other} showArrows={true} showIndicators={false} />

        <div class="album__title">Social</div>
        <Carousel slides={Social} showArrows={true} showIndicators={false} /> 

        <div class="album__title">UCD SVM Field Trip</div>
        <Carousel slides={UCDSVMFieldTrip} showArrows={true} showIndicators={false} /> 

        <div class="album__title">Bandaging Workshop</div>
        <Carousel slides={Workshop} showArrows={true} showIndicators={false} />  
      </div>
    )
  }
}

export default Album2016;