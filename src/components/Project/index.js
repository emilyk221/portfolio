import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project() {
  const [projects] = useState([
    {
      name: 'Coding Compass',
      type: 'Full Stack App',
      description: 'A full stack group project built using MySQL, Node.js, Express.js, and Handlebars templating that allows users to compare different bootcamp programs',
      href: 'https://coding-compass.herokuapp.com/',
      github: 'https://github.com/hienm9/Coding-Compass'
    },
    {
      name: 'Tech Blog',
      type: 'Full Stack App',
      description: 'A full stack project that is a blog site that allows users to share blog posts and comments about posts',
      href: 'https://young-falls-35521.herokuapp.com/',
      github: 'https://github.com/emilyk221/Blog'
    },
    {
      name: 'Weather Dashboard',
      type: 'Front End App',
      description: 'This front-end app displays the current and forecasted weather in a user-input city',
      href: 'https://emilyk221.github.io/weather-dashboard/',
      github: 'https://github.com/emilyk221/weather-dashboard'
    },
    {
      name: 'Budget Tracker',
      type: 'Progressive Web App',
      description: 'This web app was transformed into a PWA with offline functionality',
      href: 'https://salty-waters-55531.herokuapp.com/',
      github: 'https://github.com/emilyk221/Budget-Tracker'
    },
    {
      name: 'Code Quiz',
      type: 'Front End App',
      description: 'A timed JavaScript coding quiz for users to test their JavaScript knowledge and compete for the high score',
      href: 'https://emilyk221.github.io/Code-Quiz/',
      github: 'https://github.com/emilyk221/Code-Quiz'
    },
    {
      name: 'Portfolio',
      type: 'React App',
      description: 'A portfolio built using React to introduce myself and demonstrate my web development abilities to potential employers',
      href: '#',
      github: 'https://github.com/emilyk221/portfolio'
    }
  ]);

  return (
    <Container>
      <Row xs={1} md={2} className="g-4 flex-row">
        {projects.map((project) => (
          <Col key={project.name}>
            <Card>
              <Card.Img variant="top"
                src={require(`../../assets/images/${project.name}.png`)} 
                alt={project.description} 
                className="card-img-fluid"
                key={project.name}
              />
              <Card.ImgOverlay className="overlay">
                <Card.Title className='overlay-title flex-row space-between'>
                  <a className="overlay-link" href={project.href}>{project.name}</a>
                  <a className="overlay-github" href={project.github}><FontAwesomeIcon icon={faGithub} /></a>
                </Card.Title>
                <br />
                <Card.Text className='overlay-text'>{project.type}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Project;