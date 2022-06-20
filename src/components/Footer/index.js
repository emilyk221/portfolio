import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/emilyk221"><FontAwesomeIcon icon={faGithub} size='4x' /></a>
      <a href="https://www.linkedin.com/in/emily-g-kruse/"><FontAwesomeIcon icon={faLinkedin} size='4x' /></a>
      <a href="https://stackoverflow.com/users/17980237/emily"><FontAwesomeIcon icon={faStackOverflow} size='4x' /></a>
    </footer>
  );
}

export default Footer;
