import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import '../styles/css/Home.css';

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <Carousel />
        {this.props.content.map((section, index) =>
          <div className="home-section">
            <h3>{section.title}</h3>
            <p>{section.body}</p>
          </div>
        )}
      </div>
    );
  }
}

Home.defaultProps = {
  content: [{
      title: "Mission",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },{
      title: "Why Cal PVC",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }]
};

export default Home;
