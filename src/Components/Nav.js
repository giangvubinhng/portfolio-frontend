import React, { useContext  }  from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap';
import axios from 'axios';
import { myContext } from '../Context';



function NavBar() {
  

  const logout = () => {
    axios.get("https://myportfolioq.herokuapp.com/auth/logout", {withCredentials: true}).then(res => {
      if (res.data === "done")
      {
        window.location.href = "/"
      }
    })
  }
  const context = useContext(myContext);
  let logState;
  if (context)
  {
    logState = 
      <Link style={{textDecoration: 'none'}} to='/'>
    <li className="nav-item" onClick={logout}>
      <a className="nav-link">Logout</a>
    </li>
  </Link>;
  }
  else
  {
    logState = null;
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="thisNav">
    <Link className="logo" style={{textDecoration: 'none'}}  to='/'>
    <Navbar.Brand>Giang's Portfolio</Navbar.Brand>
    </Link> 
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Link style={{textDecoration: 'none'}} to='/'>
          <li className="nav-item">
            <a className="nav-link">Home</a>
          </li>
        </Link>
        <Link style={{textDecoration: 'none'}} to='/resume'>
          <li className="nav-item">
            <a className="nav-link">Resume</a>
          </li>
        </Link>
        <Link style={{textDecoration: 'none'}} to='/contact'>
          <li className="nav-item">
            <a className="nav-link">Contact</a>
          </li>
        </Link>
        {logState}
      </Nav>
      <Nav>
      <Nav.Link href="https://github.com/giangvubinhng" target="_blank"><i className="fab fa-github"></i></Nav.Link>
      <Nav.Link eventKey={2} href="https://www.linkedin.com/in/giangvubinhn/" target="_blank">
      <i className="fab fa-linkedin"></i>
      </Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
    
  );
}

export default NavBar;