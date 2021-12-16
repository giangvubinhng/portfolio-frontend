import React from 'react';
import './Resume.css';
import { Container, Col, Row, ProgressBar } from 'react-bootstrap';

function Resume() {
	return (
		<div className="outer-body">
			<div className="inner-body">
				<Container>
					<Row className="Row row-3">
						<Col lg={3}>
							<div className="section-card">
								<h2 className="title">SKILLS</h2>
							</div>
						</Col>
						<Col lg={9}>
							<h5>Focus</h5>
							<p>
								I spend most of my time doing Full Stack Web Development, but I
								also love doing Game Development in my free time!
							</p>
							<h5>Coding Languages</h5>
							<div>
								<h6>Java</h6>
								<ProgressBar striped variant="success" animated now={60} />
								<h6>Python</h6>
								<ProgressBar striped variant="info" animated now={50} />
								<h6>C#</h6>
								<ProgressBar striped variant="warning" animated now={60} />
								<h6>C Programming Language</h6>
								<ProgressBar striped variant="warning" animated now={55} />
								<h6>JavaScript</h6>
								<ProgressBar striped variant="danger" animated now={70} />
								<h6>HTML & CSS</h6>
								<ProgressBar striped variant="danger" animated now={70} />
							</div>
							<br></br>
							<h5>Favorite Applications</h5>
							<Container>
								<Row md={4}>
									<Col lg={3}>
										<img
											src="/images/adobe.png"
											alt="adobe"
											className="tech-image"
										/>
									</Col>
									<Col lg={3}>
										<img
											src="/images/mongodb.png"
											alt="adobe"
											className="tech-image"
										/>
									</Col>
									<Col lg={3}>
										<img
											src="/images/unity.png"
											alt="adobe"
											className="tech-image"
										/>
									</Col>
									<Col lg={3}>
										<img
											src="/images/nodejs.png"
											alt="adobe"
											className="tech-image"
										/>
									</Col>
								</Row>
								<br></br>
								<Row md={4}>
									<Col lg={3}>
										<img
											src="/images/reactjs.png"
											alt="adobe"
											className="tech-image"
										/>
									</Col>
									<Col lg={3}>
										<img
											src="/images/angular.png"
											alt="adobe"
											className="tech-image"
										/>
									</Col>
									<Col lg={3}>
										<img
											src="/images/Matlab_Logo.png"
											alt="adobe"
											className="tech-image"
										/>
									</Col>
									<Col lg={3}>
										<img
											src="/images/heroku.png"
											alt="adobe"
											className="tech-image"
										/>
									</Col>
								</Row>
								<br></br>
								<Row md={4}>
									<Col lg={3}>
										<img
											src="/images/bootstrap.png"
											alt="adobe"
											className="tech-image"
										/>
									</Col>
									<Col lg={3}>
										<img
											src="/images/vscode.png"
											alt="adobe"
											className="tech-image"
										/>
									</Col>
									<Col lg={3}>
										<img
											src="/images/eclipse.png"
											alt="adobe"
											className="tech-image"
										/>
									</Col>
									<Col lg={3}>
										<img
											src="/images/git.png"
											alt="adobe"
											className="tech-image"
										/>
									</Col>
								</Row>
							</Container>
							<br />
							<h5>Leadership</h5>
							<p>
								Media Team Coordinator at Association of Vietnamese Community at
								Virginia Tech
							</p>
							<h5>Teamwork and Collaboration</h5>
							<p>
								I gained lots of experience in working with people through
								school and job projects
							</p>
							<h5>Communication</h5>
							<p>
								I have experience in public speaking, and I'm also fluent in
								English and Vietnamese
							</p>
						</Col>
					</Row>
					<Row className="Row row-1">
						<Col lg={3}>
							<div className="section-card">
								<h2 className="title">WORKS</h2>
							</div>
						</Col>
						<Col lg={9}>
							<h5>Torrential Data Solutions Inc.</h5>
							<p className="info">
								Software Engineer Intern |{' '}
								<a
									href="https://www.datahaven4dynamics.com/about"
									target="_blank"
								>
									Home Page
								</a>{' '}
								| <a>Vue.js, C#</a> <span> &bull;</span>{' '}
								<em className="date">May 2021 - Present</em>
							</p>
							<p>
								Primary responsibilities include designing, developing, testing,
								debugging, documenting, maintaining, and deploying software
								functionality related to Datahaven solution.
							</p>
							<h5>VIS-AR</h5>
							<p className="info">
								Software Engineer |{' '}
								<a href="https://www.vis-ar.com/" target="_blank">
									Home Page
								</a>
								<span> &bull;</span>{' '}
								<em className="date">January 2021 - Present</em>
							</p>
							<p>
								VIS-AR is an augmented reality startup with the intention of
								providing businesses and individuals an easy-to-use tool for
								sharing augmented reality on the internet
							</p>
							<p>
								Develop and maintain website's sever and database using Node.Js
								and Mysql
							</p>
							<h5>Virginia Tech Library Studio</h5>
							<p className="info">
								Software Developer Intern<span> &bull;</span>{' '}
								<em className="date">March 2020 - August 2020</em>
							</p>
							<p>
								Worked with a team of 4 to develop a project using Unity and C#
								to support the community during Covid-19 (Virtual Sculpture
								Garden)
							</p>
						</Col>
					</Row>
					<Row className="Row row-2">
						<Col lg={3}>
							<div className="section-card">
								<h2 className="title">PROJECTS</h2>
							</div>
						</Col>
						<Col lg={9}>
							<h5>Virginia Tech Virtual Sculpture Garden</h5>
							<p className="info">
								<a href="https://vr-garden.lib.vt.edu/" target="_blank">
									See Live
								</a>{' '}
								| Work Project | C#, Unity, WebGL, Virtual Reality{' '}
								<span> &bull;</span>{' '}
								<em className="date">May 2020 - August 2020</em>
							</p>
							<p>
								Working as a developer in a team of 4 to design and develop a 3D
								Virtual Sculpture Garden
							</p>
							<p>
								Allow anyone that wants to submit their 3D sculptures and have
								them shown inside the garden for other people to see
							</p>
							<p>
								My main work was to develop a system that would automatically
								import submitted sculptures into the application in runtime.
							</p>
							<h5>Worldowe</h5>
							<p className="info">
								<a href="http://www.worldowe.com/" target="_blank">
									See Live
								</a>{' '}
								| Web Project | Angular, NodeJS, MongoDB, Heroku
								<span> &bull;</span>{' '}
								<em className="date">July 2020 - Present</em>
							</p>
							<p>Angular, NodeJS, MongoDB, Heroku</p>
							<p></p>
							<h5>Little Mega Man</h5>
							<p className="info">
								<a
									href="https://github.com/giangvubinhng/litte-mega-man"
									target="_blank"
								>
									Source Code
								</a>{' '}
								| Personal Project | Python
								<span> &bull;</span>{' '}
								<em className="date">January 2021 - Present</em>
							</p>
							<p>
								A small personal python bot named Mega (Mega Man) that runs on
								my computer to replace Alexa.
							</p>
							<h5>Covid-19 Visualization</h5>
							<p className="info">
								Class Project | Java
								<span> &bull;</span>{' '}
								<em className="date">November 2020 - November 2020</em>
							</p>
							<p>
								An application that display bar charts, with each chart
								representing case fatality ratios (percentage of people who got
								COVID and died) for five racial groups in the United States as
								of September 2020.
							</p>
							<h5>Penguiny</h5>
							<p className="info">
								<a
									href="https://www.youtube.com/watch?v=WxoEH4LabGE"
									target="_blank"
								>
									See Live
								</a>{' '}
								|
								<a
									href="https://github.com/giangvubinhng/Penguiny"
									target="_blank"
								>
									{' '}
									Source Code
								</a>{' '}
								| Game project | Unity, C#, Adobe Photoshop
								<span> &bull;</span>{' '}
								<em className="date">March 2020 - May 2020</em>
							</p>
							<p>
								2D Mobile Game inspired by Flappy Bird | Supports both IOS and
								Android
							</p>
							<h5>FireStar</h5>
							<p className="info">
								<a href="https://simmer.io/@ohwowow/firestar" target="_blank">
									See Live
								</a>{' '}
								|
								<a
									href="https://github.com/giangvubinhng/firestar-game"
									target="_blank"
								>
									{' '}
									Source Code
								</a>{' '}
								| Collaborated game project | Unity, C#, Adobe Photoshop
								<span> &bull;</span>{' '}
								<em className="date">March 2020 - May 2020</em>
							</p>
							<p>
								2D WebGL game allowing players to practice their mouse aiming
								accuracy.
							</p>
						</Col>
					</Row>

					<Row className="Row row-4">
						<Col lg={3}>
							<div className="section-card">
								<h2 className="title">EDUCATION</h2>
							</div>
						</Col>
						<Col lg={9}>
							<h5>Virginia Tech</h5>
							<p>Expected Graduation Date: 5/2023</p>
							<p>Major: Computer Science</p>
							<p>GPA: 3.57</p>

							<h5>Hampton High School</h5>
							<p>International Baccalaureate Program</p>
							<p>Class Rank: 6/292</p>
							<p>GPA: 4.32</p>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
}

export default Resume;
