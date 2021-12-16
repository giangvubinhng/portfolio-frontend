import React, { useContext } from 'react';
import './HeroSection.css';
import '../App.css';
import axios from 'axios';
import { Button, Spinner } from 'react-bootstrap';
import ReactRoundedImage from 'react-rounded-image';
import MyPhoto from '../images/profilepic2.jpeg';
import { myBody } from '../FrontPage';

function HeroSection() {
	const body = useContext(myBody);
	function downloadResume() {
		const url = body.resume;
		window.open(url, '_blank');
	}
	return (
		<div className="hero-container">
			<div className="row-banner">
				<div className="banner-text">
					{body ? (
						<h1>{body.title}</h1>
					) : (
						<Spinner animation="border" variant="primary" />
					)}
					<ReactRoundedImage
						image={MyPhoto}
						roundedColor="#000000"
						roundedSize="5"
						imageWidth="150"
						imageHeight="150"
						hoverColor="#FFFF"
					/>
					<div className="paragraph">
						{body ? (
							<p> {body.info} </p>
						) : (
							<Spinner animation="border" variant="info" />
						)}
					</div>

					<div className="hero-btns">
						<Button
							className="btns"
							variant="warning"
							onClick={downloadResume}
							target="_blank"
						>
							Download Resume <i className="fas fa-download" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
