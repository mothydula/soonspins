import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Jumbotron } from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg">
    <Link to="/"><Navbar.Brand><img src="https://i.ibb.co/qyyPk1R/photo5116527830748997780.jpg" style={{ height: 75, width: 150, backgroundColor: "white" }} /></Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">ABOUT</Nav.Link>
          <Nav.Link href="#features">ARCHIVES</Nav.Link>
          <Nav.Link href="#pricing">CONTACT US</Nav.Link>
          <Nav.Link><Link to="/livestream">LIVESTREAM</Link></Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
    <div className="line"></div>
    </div>
  )
}

export default Header