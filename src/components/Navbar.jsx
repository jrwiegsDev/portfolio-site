import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // <-- Add this line to import the styles

function Navbar() {
  return (
    <nav>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <span>|</span>
        <Link to="/about">About</Link>
        <span>|</span>
        <Link to="/projects">Projects</Link>
        <span>|</span>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
