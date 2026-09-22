import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Certificate from './components/Certificate';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Project & Projects rendu path-ukum work aagum */}
        <Route path="/projects" element={<Project />} />
        <Route path="/project" element={<Project />} />

        {/* Certificate & Certificates rendu path-ukum work aagum */}
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/certificate" element={<Certificate />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;