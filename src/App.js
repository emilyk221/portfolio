import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [sectionSelected, setSectionSelected] = useState('about');

  return (
    <div className="App">
      <Header
        sectionSelected={sectionSelected}
        setSectionSelected={setSectionSelected}
      ></Header>
      <main>
        {sectionSelected === 'about' &&
          <About></About>
        }
        {sectionSelected === 'projects' &&
          <section className='projects'>
            <h2>Projects</h2>
            <Project></Project>
          </section>
        }
        {sectionSelected === 'contact' &&
          <Contact></Contact>
        }
        {sectionSelected === 'resume' &&
          <section className='resume'>
            <h2>Resume</h2>
            <p>Download my <a href="./assets/images/Emily-Kruse-Resume.pdf" target="_blank">Resume</a></p>
            <h4>Skills and Proficiencies</h4>
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
            </ul>
          </section>
        }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
