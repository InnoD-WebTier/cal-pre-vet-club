import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import Grid from '../../components/Grid.js';
import '../../styles/css/Albums.css';

const BlackBaseball= [
  "../images/Merchandise/Black Baseball 3-4 Sleeve - $20/1.jpg",
  "../images/Merchandise/Black Baseball 3-4 Sleeve - $20/2.jpg"
];

const BlackLongSleeve = [
  "../images/Merchandise/Black Long Sleeve - $18/1.jpg",
  "../images/Merchandise/Black Long Sleeve - $18/2.jpg",
  "../images/Merchandise/Black Long Sleeve - $18/3.jpg"
];

const GraySweats = [
  "../images/Merchandise/Gray Sweats - $20/1.jpg",
  "../images/Merchandise/Gray Sweats - $20/2.jpg"
];

const NavyCap = [
  "../images/Merchandise/Navy Embroidered Cap $20/1.jpg",
  "../images/Merchandise/Navy Embroidered Cap $20/2.jpg"
];

const PreHealthshirt= [
  "../images/Merchandise/Pre-Health Society T-shirt - free/1.jpg",
  "../images/Merchandise/Pre-Health Society T-shirt - free/2.jpg"
];

const PVCsticker= [
  "../images/Merchandise/PVC Laptop Sticker - $3/1.jpg"
];

const PVCmug= [
  "../images/Merchandise/PVC Mug (white) - $7/1.jpg",
  "../images/Merchandise/PVC Mug (white) - $7/2.jpg"
];


class Merchandise extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div class="album__container">
        <div class="title">Merchandise</div>

        <div class="album__title">Black Baseball 3-4 Sleeve: $20 (S/M)</div>
        <Carousel slides={BlackBaseball} showArrows={true} showIndicators={false} />

        <div class="album__title">Black Long Sleeve: $18 (XS/S/M/L)</div>
        <Carousel slides={BlackLongSleeve} showArrows={true} showIndicators={false} /> 

        <div class="album__title">Gray Sweats: $20 (S/M)</div>
        <Carousel slides={GraySweats} showArrows={true} showIndicators={false} /> 

        <div class="album__title">Navy Cap: $20</div>
        <Carousel slides={NavyCap} showArrows={true} showIndicators={false} /> 

        <div class="album__title">Pre-Health shirt: FREE (S/M/L)</div>
        <Carousel slides={PreHealthshirt} showArrows={true} showIndicators={false} /> 

        <div class="album__title">PVC sticker: $3</div>
        <Carousel slides={PVCsticker} showArrows={true} showIndicators={false} /> 

        <div class="album__title">PVC mug: $7</div>
        <Carousel slides={PVCmug} showArrows={true} showIndicators={false} /> 
      </div>
    )
  }
}

export default Merchandise;