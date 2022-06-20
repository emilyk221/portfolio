import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import About from './components/About';

function App() {
  const [sectionSelected, setSectionSelected] = useState('about');

  return (
    <div className="App">
      <Header
        sectionSelected={sectionSelected}
        setSectionSelected={setSectionSelected}
      ></Header>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
