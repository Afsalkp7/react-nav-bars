// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">Logo</Link>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <Link to="/" className="text-white">Home</Link>
              <Link to="/about" className="text-white">About</Link>
              <Link to="/contact" className="text-white">Contact</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block text-white">Home</Link>
          <Link to="/about" className="block text-white">About</Link>
          <Link to="/contact" className="block text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
