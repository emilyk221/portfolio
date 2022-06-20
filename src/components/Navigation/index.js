import React from 'react';

function Navigation(props) {
  const {
    sectionSelected,
    setSectionSelected
  } = props;

  return (
    <nav className="nav">
      <ul className="flex-row">
        <li className={`mx-2 ${sectionSelected === 'about' && 'navActive'}`}>
          <h4><a href="#about" onClick={() => setSectionSelected("about")}>
            About me
          </a></h4>
        </li>
        <li className={`mx-2 ${sectionSelected === 'projects' && 'navActive'}`}>
          <h4><a href="#projects" onClick={() => setSectionSelected("projects")}>
            Projects
          </a></h4>
        </li>
        <li className={`mx-2 ${sectionSelected === 'contact' && 'navActive'}`}>
          <h4><a href="#contact" onClick={() => setSectionSelected("contact")}>
            Contact
          </a></h4>
        </li>
        <li className={`mx-2 ${sectionSelected === 'resume' && 'navActive'}`}>
          <h4><a href="#resume" onClick={() => setSectionSelected("resume")}>
            Resume
          </a></h4>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
