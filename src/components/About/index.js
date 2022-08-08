import React from 'react';
import Avatar from '../../assets/images/AvatarEmily.png';

function About() {
  return (
    <section className="about section">
      <h2>About Me</h2>
      <div className='flex-row space-evenly'>
        <img src={Avatar} alt="Avatar of Emily Kruse wearing glasses and a hoodie" />
        <p>
        I am a full stack web developer ready to make lives easier and simpler by crafting solutions to problems and frustrations. 
        I recently earned a certificate in full stack web development from The Ohio State University Coding Bootcamp. I have 
        recently developed my skills with JavaScript, CSS, HTML, Node, Express, MySQL, Sequelize, Handlebars, MongoDB, and React.<br /><br /> 
        I recently worked on a team of six to develop an app called RentIt that allows users to list and rent items, such as tools, outdoor gear, etc., 
        to/from other users. During this project, I used agile development, React, MySQL, Sequelize, Node.js, and Express.js. In the near future, 
        we plan to add messaging and rental history components to RentIt to improve the user experience.<br /><br /> My aim is to use industry best practices 
        to build quality applications that solve pain points whether they are nearly universal or extremely niche. I am excited to 
        use my recently acquired software engineering skills and my life-long passion for creating to work collaboratively with a 
        team who makes a difference for people.
        </p>
      </div>
    </section>
  );
}

export default About;
