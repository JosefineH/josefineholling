import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Home from '../images/home.svg';

import "bootstrap/dist/css/bootstrap.min.css";

function NavbarPage() {
  return (
    
    <Navbar collapseOnSelect scrolling dark expand="md" fixed="top">
      <Navbar.Brand href="#home">
          <img 
          src={Home}
          alt="home-logo"
          width="30px"
          />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <div className="navbar-container">
        <Nav className="justify-content-end" style={{ width: "100%" }} id="navbar-dropdown">
          <Nav.Link href="#skills">About</Nav.Link>
          <Nav.Link href="#work">Work</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
   
  );
}

export default NavbarPage