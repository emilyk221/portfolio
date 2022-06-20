import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';

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
        <About></About>}
        {sectionSelected === 'contact' &&
        <Contact></Contact>}
      </main>
    </div>
  );
}

export default App;
