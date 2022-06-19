import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
