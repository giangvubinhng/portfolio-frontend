import React from 'react';
import './Home.css';
import HeroSection from './HeroSection.js'
import Cards from './Cards';
import Contact from './Contact'
import DrifterStars from '@devil7softwares/react-drifter-stars';
import FloatingNav from './FloatingNav';
function Home() {
	return (
		<div className="home-container">
			<div className="effect-container">
				<DrifterStars motion={{enabled: false}} />
			</div>
			<div id="about">
			<HeroSection />
			</div>
			<div id="projects">
				<Cards />
			</div >
			<div id="contact">
				<Contact />
			</div >

		</div>
	);
}

export default Home;
