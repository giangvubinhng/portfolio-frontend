import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';
import './HeroSection.css';
import '../App.css';
import {Button, Spinner} from 'react-bootstrap';
import ReactRoundedImage from 'react-rounded-image';
import MyPhoto from '../images/profilepic2.jpeg';
import bioService from '../Services/bio.service'

function HeroSection() {
	const initialBody = {
		title: '',
		info: '',
		resumeLink: ''
	}
	const [body, setBody] = useState(initialBody);
	const [isLoading, setIsLoading] = useState(true);
	const fetchedBio = useCallback(async () => {
		setIsLoading(true);
		const data = await bioService.getBio();
		if (data.result?.length > 0) {
			setBody(data.result[0]);
		}
		setIsLoading(false);
	}, []);
	useEffect(() => {
		fetchedBio().catch(e => {
			setIsLoading(false)
		})
	}, [])

	function downloadResume(e) {
		e.preventDefault();
		if (body.resumeLink !== '') {
			const url = body.resumeLink;
			window.open(url, '_blank');
		}
	}
	return (
		<div className="hero-container">
			<div className="row-banner">
				<div className="banner-text">
					{!isLoading ? (
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
						{!isLoading ? (
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
