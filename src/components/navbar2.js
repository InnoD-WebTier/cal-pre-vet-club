import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import logo from '../images/navbar/customlogo.jpg';

// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">


class NavBar2 extends Component {

  render () {
  	return (
		  <Navbar collapseOnSelect fluid>
		    <Navbar.Header>
					<IndexLinkContainer to="/">

		      	<img src={logo}  className="d-inline-block align-top logo" alt={logo}/> 

					</IndexLinkContainer>
						
		      <Navbar.Toggle />

		    </Navbar.Header>
		    <Navbar.Collapse>

		    <Nav pullRight>
			
		      <NavDropdown className="navText hoverBorder" eventKey={1} title="ABOUT US" id="basic-nav-dropdown">	
						<IndexLinkContainer to="/officers">
							<NavItem className="navText hoverBorder" eventKey={2} >Officers</NavItem>
						</IndexLinkContainer>
						<IndexLinkContainer  to="/photos">
							<NavItem className="navText hoverBorder" eventKey={3}>Photos</NavItem>
						</IndexLinkContainer>
		      </NavDropdown>

					<IndexLinkContainer to="/members">
						<NavItem className="navText hoverBorder" eventKey={4} >MEMBERS</NavItem>
					</IndexLinkContainer>
					<IndexLinkContainer to="/join">
						<NavItem className="navText hoverBorder" eventKey={5}>JOIN US</NavItem>
					</IndexLinkContainer>
					<IndexLinkContainer to="/contact">
						<NavItem className="navText hoverBorder" eventKey={6}>CONTACT</NavItem>
					</IndexLinkContainer>

		    </Nav> 
		    </Navbar.Collapse>
		  </Navbar>
		  );
	}
}

export default NavBar2;