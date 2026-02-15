import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import './App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Education from './pages/Education';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
