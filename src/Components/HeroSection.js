import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';
import './HeroSection.css';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bioService from '../Services/bio.service';

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
			<Container fluid="md">
				<Row>
					<Col md="auto">
						{isLoading ? null : (
							<div className="bio-wrapper">
								<div className="title-container">
									<p className="head-t">
										{body.title}
									</p>
									<p className="sub-info">
										Software Engineer
									</p>
								</div>
							</div>
						)}
					</Col>
					<Col md="auto">
						{isLoading ? null : (
							<div className="bio-wrapper">
								<div className="info-container">
									<p>
										{body.info}
									</p>
								</div>
								<div>
									<button className="button-48" onClick={downloadResume}><span className="text">Get My Resume</span></button>
								</div>
							</div>
						)}
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default HeroSection;
