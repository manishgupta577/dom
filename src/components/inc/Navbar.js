import React from 'react';
import logo from '../images/world.png';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function Navbar1() {
  return(
    <div>
     
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark" sticky="top">
    <div className="nav-brand">
    <Navbar.Brand href="/"><div className="nab"><img src={logo} alt="" width="50" height="45"/><b>                       MANGO TREE</b></div></Navbar.Brand>
    </div>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <div className="navo">
      <Nav className="mr-auto">
      
      <div className="nav-item">
      <Nav.Link href="/"><div className="nav-content"><b>HOME</b></div></Nav.Link>
      </div>
      <div className="nav-item">
        <Nav.Link href="/about"><div className="nav-content"><b>ABOUT</b></div></Nav.Link>
      </div>
      <div className="nav-item">
        <Nav.Link href="/contact"><div className="nav-content"><b>CONTACT</b></div></Nav.Link>
      </div>
      <div className="nav-item">
        <Nav.Link href="/project"><div className="nav-content"><b>PRODUCTS</b></div></Nav.Link>
      </div>
      <div className="nav-item">
        <Nav.Link eventKey={2} href="#memes"><div className="nav-content">
          <b>SUPPORT</b></div>
        </Nav.Link>
        </div>
        

       
      </Nav>
      </div>
      
    </Navbar.Collapse>
    
  </Navbar>
  
</div>
   );

 }

export default Navbar1;