import React, { useState, useEffect, useContext } from 'react';
import "./Nav.css"
import { Navbar, Nav } from 'react-bootstrap';
import { appContext } from './../Context';
import Container from 'react-bootstrap/Container';

const NavBar = () => {

  const {effect} = useContext(appContext);
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  const toggleEffect = () => {
    effect[1](!effect[0]);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : "nav-container"}>
      <Container fluid>
        <Navbar.Brand href="/">
          <h2 className="nav-brand-title">
            GiangOverFlow
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Projects</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Contact</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/giangvubinhng"> <i className="fab fa-github"></i> </a>
              <a href="https://www.linkedin.com/in/giangvubinhn/"> <i className="fab fa-linkedin"></i> </a>
            </div>
            <button className="vvd" onClick={toggleEffect}><span>Toggle Effect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
