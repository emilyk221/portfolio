import React from 'react';

function Resume() {
  return (
    <section className="resume section">
      <h2>Resume</h2>
      <p>Download my
        <a href={require("../../assets/images/Emily-Kruse-Resume.pdf")} 
          download="Emily-Kruse-Resume"> Resume
        </a>
      </p>
      <h4>Proficiencies</h4>
      <ul>
        <li>MERN stack</li>
        <li>Javascript</li>
        <li>Node.js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Express.js</li>
        <li>React</li>
        <li>Jquery</li>
        <li>Bootstrap</li>
        <li>REST APIs</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>GraphQL</li>
      </ul>
    </section>
  );
}

export default Resume;
