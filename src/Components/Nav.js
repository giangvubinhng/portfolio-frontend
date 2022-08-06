import React, {useContext, useState, useEffect} from 'react';
import "./Nav.css"
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import {appContext} from '../Context';

const NavBar = () => {

	const {user} = useContext(appContext);

	const [userObject, setUserObject] = useState(user[0]);
	const [activeLink, setActiveLink] = useState('home');
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		setUserObject(user[0]);
	}, [user[0]]);



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
						<Nav.Link as={Link} to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
						<Nav.Link as={Link} to="/blogs" className={activeLink === 'blogs' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('blogs')}>Blogs</Nav.Link>
					</Nav>
					<span className="navbar-text">
						<div className="social-icon">
							<a href="https://github.com/giangvubinhng"> <i className="fab fa-github"></i> </a>
							<a href="https://www.linkedin.com/in/giangvubinhn/"> <i className="fab fa-linkedin"></i> </a>
						</div>
						{userObject.isLoggedIn ? (
							<Nav.Link as={Link} to="/admin">
								<button className="vvd" onClick={() => onUpdateActiveLink('')}>
									<span>
										Admin
									</span>
								</button>
							</Nav.Link>
						) :
							(
								<Nav.Link as={Link} to="/login">
									<button className="vvd" onClick={() => onUpdateActiveLink('')}>
										<span>
											Login
										</span>
									</button>
								</Nav.Link>
							)
						}
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavBar;
