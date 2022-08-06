import React from 'react';
import './Skills.css'
import { Container, Row, Col } from 'react-bootstrap';

const Skills = () => {
    const container = '.tagcloud';
    const languages = [
        'Java', 'C#', 'HTML', 'CSS', 'JavaScript',
        'TypeScript', 'C Programming Language'
    ]
    const frameworks = [
                'Vue.js',
                'React.js',
                'Angular',
                'Next.js',
                'Node.js',
                'GraphQL',
                '.Net Core',
                'Unity',
                'Docker',
                'MySQL',
                'MongoDB',
    ]

    return (<div className="skills-container">
        <h1 className="skill-title">Skills <i className="fas fa-terminal"></i></h1>
        <Container fluid>
        <div className="skills-info">
            <Row>
                <Col>
        <h3>Languages I work with</h3>
            {/* <ul className="code-list">
                <li>Java</li>
                <li>C#</li>
                <li>HTML/CSS/JavaScript</li>
                <li>TypeScript</li>
                <li>C Programming Language</li>
            </ul> */}
                </Col>
                <Col>

            <h3>Tech stack I've used</h3>
            <ul className='code-list'>
                <li>Vue.js</li>
                <li>React.js</li>
                <li>Angular</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>GraphQL</li>
                <li>.Net Core</li>
                <li>Unity</li>
                <li>Docker</li>
                <li>MySQL</li>
                <li>MongoDB</li>
            </ul>
                </Col>

            </Row>
        </div>

        </Container>
    </div>)
}

export default Skills;