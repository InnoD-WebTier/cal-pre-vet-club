import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <div className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/members">Members</Link></li>
            <li><Link to="/officers">Officers</Link></li>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Navbar;