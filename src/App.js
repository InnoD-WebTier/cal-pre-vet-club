import React, { Component } from 'react';
import './App.css';
import Navbar from './pages/Navbar.js';
import Home from './pages/Home.js';
import Gallery from './pages/Gallery.js';
import Album2018 from './pages/albums/Album2018.js';
import Album2017 from './pages/albums/Album2017.js';
import Album2016 from './pages/albums/Album2016.js';
import Album2015 from './pages/albums/Album2015.js';
import Album2014 from './pages/albums/Album2014.js';
import Merchandise from './pages/albums/Merchandise.js';
import Members from './pages/Members.js';
import Officers from './pages/Officers.js';
import Contact from './pages/Contact.js';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/photos' component={Gallery}/>
      <Route exact path='/members' component={Members}/>
      <Route exact path='/officers' component={Officers}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/photos/2018-2019' component={Album2018}/>
      <Route exact path='/photos/2017-2018' component={Album2017}/>
      <Route exact path='/photos/2016-2017' component={Album2016}/>
      <Route exact path='/photos/2015-2016' component={Album2015}/>
      <Route exact path='/photos/2014-2015' component={Album2014}/>
      <Route exact path='/photos/Merchandise' component={Merchandise}/>
    <Switch/>
  <main/>
);

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Main/>
      <div/>
    )
  }
}

export default App;
