import React from 'react';
import Avatar from '../../assets/images/AvatarEmily.png';

function About() {
  return (
    <section className="about section">
      <h2>About Me</h2>
      <img src={Avatar} alt="Avatar of Emily Kruse wearing glasses and a hoodie" />
      <p>
      I am a full stack web developer ready to make lives easier and simpler by crafting solutions to problems and frustrations. 
      I am currently earning a certificate in full stack web development from The Ohio State University Coding Bootcamp. I have 
      recently developed my skills with JavaScript, CSS, HTML, Node, Express, MySQL, Sequelize, Handlebars, MongoDB, and React. 
      I recently worked on a team of eight to develop an app that helps prospective coding bootcamp students compare various 
      bootcamps, including user-provided information in the form of ratings and comments, in order to find the best fit for them. 
      During this project, I used agile development, MySQL, Sequelize, and templating. My aim is to use industry best practices 
      to build quality applications that solve pain points whether they are nearly universal or extremely niche. I am excited to 
      use my recently acquired software engineering skills and my life-long passion for creating to work collaboratively with a 
      team who makes a difference for people.
      </p>
    </section>
  );
}

export default About;
