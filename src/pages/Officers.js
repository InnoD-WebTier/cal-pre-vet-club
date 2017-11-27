import React, { Component } from 'react';
import Officer from '../components/Officer';
import '../styles/css/Officers.css';
import officersContent from '../content/OfficersContent.js';

class Officers extends Component {
  render() {
    return (
      <div className="officers">
        <h2>Officers</h2>
        {officersContent.map((officer, index) =>
          <Officer officer={officer} key={index} ordering={index % 2 === 0 ? "left" : "right"} />
        )}
      </div>
    );
  }
}

export default Officers;
