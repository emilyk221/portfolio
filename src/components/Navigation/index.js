import React from 'react';

function Navigation(props) {
  const {
    sectionSelected,
    setSectionSelected
  } = props;
  return (
    <nav className="Nav">
      <ul className="flex-row">
        <li className="mx-2">
          <a data-testid="about" href="#about" onClick={() => setSectionSelected("About")}>
            About me
          </a>
        </li>
        <li className={`mx-2 ${sectionSelected && 'navActive'}`}>
          <span onClick={() => setSectionSelected("Projects")}>Projects</span>
        </li>
        <li className={`mx-2 ${sectionSelected && 'navActive'}`}>
          <span onClick={() => setSectionSelected("Contact")}>Contact</span>
        </li>
        <li className={`mx-2 ${sectionSelected && 'navActive'}`}>
          <span onClick={() => setSectionSelected("Resume")}>Resume</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
