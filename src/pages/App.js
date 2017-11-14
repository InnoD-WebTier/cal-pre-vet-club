import React, { Component } from 'react';
import Officers from './Officers';
import officersContent from '../content/OfficersContent';
import '../styles/css/index.css';

// A base file for all your pages to come together.

class App extends Component {
  render() {
    return (
      <div className="App">
        <Officers content={officersContent}/>
      </div>
    );
  }
}

export default App;
