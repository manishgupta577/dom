import React from 'react';
import logo from '../images/world.png';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function Navbar1() {
  return(
    <div>
     
    <Navbar className="stick" collapseOnSelect expand="lg" bg="warning" variant="dark" >
    <div className="nav-brand">
    <Navbar.Brand href="/"><div className="nab"><img src={logo} alt="" width="50" height="45"/><Link className="link" to="/" ><b>                                         MangoTree</b></Link></div></Navbar.Brand>
    </div>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <div className="navo">
      <Nav className="mr-auto">
      
      <div className="nav-item">
      <Nav.Link href="#"><div className="nav-content"><Link className="link" to="/" ><b>HOME</b></Link></div></Nav.Link>
      </div>
      <div className="nav-item">
      <Nav.Link href="#"><div className="nav-content"><Link className="link" to="/about"><b>ABOUT</b></Link></div></Nav.Link>
      </div>
      <div className="nav-item">
        <Nav.Link href="#"><div className="nav-content"><Link className="link" to="/contact"><b>CONTACT</b></Link></div></Nav.Link>
      </div>
      <div className="nav-item">
        <Nav.Link href="/project"><div className="nav-content"><Link className="link" to="/project"><b>PRODUCTS</b></Link></div></Nav.Link>
      </div>
      <div className="nav-item">
        <Nav.Link eventKey={2} href="#"><div className="nav-content"><Link className="link" to="/" >
          <b>SUPPORT</b></Link></div>
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
