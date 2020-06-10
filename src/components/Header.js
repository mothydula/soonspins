import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Jumbotron } from 'react-bootstrap'



const Header = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand href="#home"><img src="https://i.ibb.co/qyyPk1R/photo5116527830748997780.jpg" style={{ height: 75 }} /></Navbar.Brand>
        <Nav className="mr-auto" style={{ color: "white" }}>
          <Nav.Link href="#home">ABOUT</Nav.Link>
          <Nav.Link href="#features">ARCHIVES</Nav.Link>
          <Nav.Link href="#pricing">CONTACT US</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Header