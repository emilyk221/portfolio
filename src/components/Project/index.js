import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function Project() {
  const [projects] = useState([
    {
      name: 'Portfolio',
      type: 'MERN Stack App',
      description: ''
    },
    {
      name: 'Coding Compass',
      type: 'Full Stack App',
      description: ''
    },
    {
      name: 'Tech Blog',
      type: 'Full Stack App',
      description: ''
    },
    {
      name: 'Weather Dashboard',
      type: 'Front End App',
      description: ''
    }
  ]);

  return (
    <section className="projects">
      {projects.map((project) => (
        <Card className="bg-dark text-white">
          <Card.Img src={require(`../../assets/images/${project.name}.png`)} alt={project.description} />
          <Card.ImgOverlay>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>{project.type}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      ))}
    </section>
  );
}

export default Project;