import React, { useState } from 'react';
import Navigation from '../Navigation';

function Header() {
  const [sections] = useState(["About", "Projects", "Contact", "Resume"]);
  const [sectionSelected, setSectionSelected] = useState(sections[0]);
  return (
    <header className="Header">
      <h1>
        <a href="/">Emily Kruse</a>
      </h1>
      <Navigation
        sections={sections}
        sectionSelected={sectionSelected}
        setSectionSelected={setSectionSelected}
      ></Navigation>
    </header>
  );
}

export default Header;
