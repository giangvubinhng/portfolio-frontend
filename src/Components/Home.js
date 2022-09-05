import React, { useContext } from 'react';
import './Home.css';
import HeroSection from './HeroSection.js'
import Cards from './Cards';
import Contact from './Contact'
import { appContext } from './../Context';
import DrifterStars from '@devil7softwares/react-drifter-stars';
function Home() {
  const { effect } = useContext(appContext);
  return (
    <div className="home-container">
      {effect[0] ?
        (
          <div className="effect-container">
            <DrifterStars motion={{ enabled: false }} />
          </div>
        ) : null
      }
      <div id="home">
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
