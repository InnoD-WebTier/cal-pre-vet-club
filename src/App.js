import React, { Component } from 'react';
import './App.css';
import Navbar from './pages/Navbar.js';
import Home from './pages/Home.js';
import Albums from './pages/Albums.js';
import Members from './pages/Members.js';
import Officers from './pages/Officers.js';
import Contact from './pages/Contact.js';
import { Switch, Route } from 'react-router-dom';
import Navbar2 from './components/navbar2.js';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/photos' component={Albums}/>
      <Route path='/members' component={Members}/>
      <Route path='/officers' component={Officers}/>
      <Route path='/contact' component={Contact}/>
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
