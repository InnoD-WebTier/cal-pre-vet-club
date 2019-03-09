import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import Grid from '../../components/Grid.js';
import '../../styles/css/Albums.css';

const GM = [
  "../images/2018-2019/GM/1.jpg",
  "../images/2018-2019/GM/2.jpg",
  "../images/2018-2019/GM/3.jpg"
];

const MenchiesSocial = [
  "../images/2018-2019/Menchies-Social/1.jpg",
  "../images/2018-2019/Menchies-Social/2.jpg"
];

const SutureWorkshop = [
  "../images/2018-2019/Suture-Workshop/1.jpg",
  "../images/2018-2019/Suture-Workshop/2.jpg",
  "../images/2018-2019/Suture-Workshop/3.jpg",
  "../images/2018-2019/Suture-Workshop/4.jpg",
  "../images/2018-2019/Suture-Workshop/5.jpg",
  "../images/2018-2019/Suture-Workshop/6.jpg",
  "../images/2018-2019/Suture-Workshop/7.jpg",
  "../images/2018-2019/Suture-Workshop/8.jpg",
  "../images/2018-2019/Suture-Workshop/9.jpg"
];


class Album2018 extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div class="album__container">
        <div class="title">2018 - 2019</div>

        <div class="album__title">GM</div>
        <Carousel slides={GM} showArrows={true} showIndicators={false} />

        <div class="album__title">Mecnchies Social</div>
        <Carousel slides={MenchiesSocial} showArrows={true} showIndicators={false} /> 

        <div class="album__title">Suture Workshop</div>
        <Carousel slides={SutureWorkshop} showArrows={true} showIndicators={false} /> 
      </div>
    )
  }
}

export default Album2018;