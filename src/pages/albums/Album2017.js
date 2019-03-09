import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import Grid from '../../components/Grid.js';
import '../../styles/css/Albums.css';

const FundraiserConcert = [
  "../images/2017-2018/Fundraiser-Concert/1.jpg",
  "../images/2017-2018/Fundraiser-Concert/2.jpg",
  "../images/2017-2018/Fundraiser-Concert/3.jpg",
  "../images/2017-2018/Fundraiser-Concert/4.jpg",
  "../images/2017-2018/Fundraiser-Concert/5.jpg",
  "../images/2017-2018/Fundraiser-Concert/6.jpg",
  "../images/2017-2018/Fundraiser-Concert/7.jpg",
  "../images/2017-2018/Fundraiser-Concert/8.jpg",
  "../images/2017-2018/Fundraiser-Concert/9.jpg"
];

const GM = [
  "../images/2017-2018/GM/1.jpg",
  "../images/2017-2018/GM/2.jpg",
  "../images/2017-2018/GM/3.jpg",
  "../images/2017-2018/GM/4.jpg",
  "../images/2017-2018/GM/5.jpg",
  "../images/2017-2018/GM/6.jpg",
  "../images/2017-2018/GM/7.jpg",
  "../images/2017-2018/GM/8.jpg"
];

const Officers = [
  "../images/2017-2018/Officers/Officers.jpg"
];


class Album2017 extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div class="album__container">
        <div class="title">2017 - 2018</div>

        <div class="album__title">Fundraiser Concert</div>
        <Carousel slides={FundraiserConcert} showArrows={true} showIndicators={false} />

        <div class="album__title">GM</div>
        <Carousel slides={GM} showArrows={true} showIndicators={false} />

        <div class="album__title">Offiers</div>
        <Carousel slides={Officers} showArrows={true} showIndicators={false} /> 
      </div>
    )
  }
}

export default Album2017;