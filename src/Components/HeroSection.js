import React from 'react';
import './HeroSection.css';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HeroSection() {

  return (
    <div className="hero-container">
      <Container fluid="md">
        <Row>
          <Col md="auto">
            <div className="bio-wrapper">
              <div className="title-container">
                <p className="head-t">
                  Giang Nguyen
                </p>
                <p className="sub-info">
                  Software Engineer
                </p>
              </div>
            </div>
          </Col>
          <Col md="auto">
            <div className="bio-wrapper">
              <div className="info-container">
                <p>
                  Welcome to my portfolio, where I showcase my skills and experience in software engineering. I'm currently a senior studying Computer Science at Virginia Tech, and will be graduating in May 2023. I work mostly with web development, both on the frontend 
                    (TypeScript <img alt="" src="https://img.icons8.com/color/24/000000/typescript.png"/>,
                    JavaScript <img alt="" src="https://img.icons8.com/color/24/000000/javascript--v1.png"/>,
                    Vue.js <img alt="" src="https://img.icons8.com/color/24/000000/vue-js.png"/>,
                    React.js <img alt="" src="https://img.icons8.com/plasticine/24/000000/react.png"/>, 
                    Next.js,
                    HTML <img alt="" src="https://img.icons8.com/color/24/000000/html-5--v1.png"/>, 
                    CSS <img alt="" src="https://img.icons8.com/color/24/000000/css3.png"/>
                    ) and the backend 
                    (C# <img alt="" src="https://img.icons8.com/color/24/000000/c-sharp-logo.png"/>,
                    .NET Core <img alt="" src="https://img.icons8.com/color/24/000000/net-framework.png"/>,
                    Node.js <img alt="" src="https://img.icons8.com/fluency/24/000000/node-js.png"/>, 
                    Express.js).
                </p>
                <br />
                <p>In addition, I also spend a lot of "unproductive" time configuring Neovim <img alt="" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/000000/external-vim-a-highly-configurable-text-editor-for-efficiently-creating-and-changing-any-kind-of-text-logo-shadow-tal-revivo.png"/> and Arch Linux <img alt="" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/000000/external-arch-linux-composed-of-nonfree-and-open-source-software-logo-shadow-tal-revivo.png"/>, or make games with Unity.</p>
              </div>
              <div>
                <a href="https://drive.google.com/file/d/1hyaK8Wf7RgJxd9X8n7D1GE6vsmY_STQV/view?usp=sharing" target="_blank" rel="noreferrer">
                  <button className="button-48"><span className="text">Get My Resume</span></button>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
