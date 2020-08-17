import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Jumbotron } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import MoveStuffAround from './MoveStuffAround'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg">
    <Link to="/"><Navbar.Brand><img src="https://i.ibb.co/k37JC5k/soonspins4-1.png" style={{ height: 75, width: 150, }} /></Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"><FontAwesomeIcon icon={faEllipsisH } color="white" /></Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to="/about">ABOUT</Link></Nav.Link>
          <Nav.Link href="#features">ARCHIVES</Nav.Link>
          <Nav.Link><Link to="/livestream">PERFORMANCES</Link></Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
    <div className="line" style={{color: "#F5AD0C!important"}}></div>
    </div>
  )
}

export default Header