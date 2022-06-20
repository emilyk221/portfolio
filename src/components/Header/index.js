import React from 'react';
import Navigation from '../Navigation';

function Header(props) {
  const {
    sectionSelected,
    setSectionSelected
  } = props;

  return (
    <header className="header flex-row space-between">
      <h1>
        <a href="/">Emily Kruse</a>
      </h1>
      <Navigation
        sectionSelected={sectionSelected}
        setSectionSelected={setSectionSelected}
      ></Navigation>
    </header>
  );
}

export default Header;
