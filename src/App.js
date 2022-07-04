import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [sectionSelected, setSectionSelected] = useState('about');

  return (
    <Router>
      <div className="App">
        <Header
          sectionSelected={sectionSelected}
          setSectionSelected={setSectionSelected}
        ></Header>
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
