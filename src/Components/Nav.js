import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap';
import {appContext} from '../Context';



function NavBar() {

	const {user} = useContext(appContext);

	let logState;
	if (user[0].isLoggedIn) {
		logState =
			<Link style={{textDecoration: 'none'}} to='/'>
				<li className="nav-item" onClick={() => console.log("out")}>
					<a className="nav-link">Logout</a>
				</li>
			</Link>;
	}
	else {

		logState = 
		<Link style={{textDecoration: 'none'}} to='/'>
			Log in
		</Link>;
	}

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="thisNav">
			<Link className="logo" style={{textDecoration: 'none'}} to='/'>
				<Navbar.Brand>Giang's Portfolio</Navbar.Brand>
			</Link>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Link style={{textDecoration: 'none'}} to='/'>
						Home
					</Link>
					<Link style={{textDecoration: 'none'}} to='/resume'>
						Resume
					</Link>
					<Link style={{textDecoration: 'none'}} to='/contact'>
						Contact
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
