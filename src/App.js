import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
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
          <section className='projects section'>
            <h2>Projects</h2>
            <Project></Project>
          </section>
        }
        {sectionSelected === 'contact' &&
          <Contact></Contact>
        }
        {sectionSelected === 'resume' &&
          <Resume></Resume>
        }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
