import React, { Component } from 'react';
import './App.css';
import Navbar from './pages/Navbar.js';
import Home from './pages/Home.js';
import Members from './pages/Members.js';
import Officers from './pages/Officers.js';
import { Switch, Route } from 'react-router-dom';
import Navbar2 from './components/navbar2.js';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/members' component={Members}/>
      <Route path='/officers' component={Officers}/>
    </Switch>
  </main>
);

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Navbar2/>
        <Main/>
      </div>
    )
  }
}

export default App;
