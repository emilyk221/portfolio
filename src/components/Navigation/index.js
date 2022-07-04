import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
  const {
    sectionSelected,
    setSectionSelected
  } = props;

  return (
    <nav className="nav">
      <ul className="flex-row">
        <Link to="/">
          <li className={`mx-2 ${sectionSelected === 'about' && 'navActive'}`}>
            <h4><a href="#about" onClick={() => setSectionSelected("about")}>
              About me
            </a></h4>
          </li>
        </Link>
        <Link to="/projects">
          <li className={`mx-2 ${sectionSelected === 'projects' && 'navActive'}`}>
            <h4><a href="#projects" onClick={() => setSectionSelected("projects")}>
              Projects
            </a></h4>
          </li>
        </Link>
        <Link to="/contact">
          <li className={`mx-2 ${sectionSelected === 'contact' && 'navActive'}`}>
            <h4><a href="#contact" onClick={() => setSectionSelected("contact")}>
              Contact
            </a></h4>
          </li>
        </Link>
        <Link to="/resume">
          <li className={`mx-2 ${sectionSelected === 'resume' && 'navActive'}`}>
            <h4><a href="#resume" onClick={() => setSectionSelected("resume")}>
              Resume
            </a></h4>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
