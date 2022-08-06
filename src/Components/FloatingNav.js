import Nav from 'react-bootstrap/Nav';
import './FloatingNav.css'
import {useState} from 'react';

function FloatingNav() {
    const [activeLink, setActiveLink] = useState()
  return (
    <div className="fn-container">
    <div className="floating-nav">
    <Nav  defaultActiveKey="/" className="flex-column">
      <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}>About</Nav.Link>
      <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>
      <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}>Contact</Nav.Link>
    </Nav></div></div>
  );
}

export default FloatingNav;