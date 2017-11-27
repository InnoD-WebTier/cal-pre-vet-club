import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import homeContent from '../content/HomeContent';
import '../styles/css/Home.css';

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <Carousel />
        <h2>Cal Pre-Vet Club</h2>
        <div className="home-section">
          <h3>Mission</h3>
          <p>{homeContent.mission}</p>
        </div>
        <div className="home-section">
          <h3>Why Cal PVC</h3>
          <p>{homeContent.whyPVC}</p>
        </div>
      </div>
    );
  }
}

export default Home;
