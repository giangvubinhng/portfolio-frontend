import React, {useContext} from 'react';
import './HeroSection.css';
import '../App.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../images/profilepic.jpg";
import { myBody } from '../FrontPage';

function HeroSection() {

    const body = useContext(myBody);
    function downloadResume(){
        const url = body.resume;
        window.open(url, '_blank');
    }
    const introduction = "Welcome to my website. I am a sophomore at Virginia Tech pursuing a Bachelor's degree in Computer Science. I was born and raised in Vietnam. I came to the U.S when I was 13 and now I live in Hampton, Virginia. I really enjoy coding and I spend most of my time learning Full Stack Web Development. However, I also have a hobby of making video games during my free time.";
    return (
        <div className='hero-container'>
            <div className="row-banner">
            <div className="banner-text">
      <h1>{body.title}</h1>
      <ReactRoundedImage image={MyPhoto} roundedColor="#000000" roundedSize="5" imageWidth="150" imageHeight="150" hoverColor="#FFFF"/>
      <div className="paragraph">
      <p>  {body.info}  </p>
      </div>
      
      <div className='hero-btns'>
        <Button
          className='btns'
          variant="warning"
          onClick={downloadResume}
          target="_blank"
        >
          Download Resume <i className='fas fa-download' />
        </Button>
      </div>
      </div>
      </div>
    </div>
    )
}

export default HeroSection
