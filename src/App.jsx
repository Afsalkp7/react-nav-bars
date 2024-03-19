// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/NavBar';
import Home from '../src/components/Home';
import About from '../src/components/About';
import Contact from '../src/components/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
