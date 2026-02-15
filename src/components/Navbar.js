import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <h2>Jescintha.</h2>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={isOpen ? "nav-links mobile-active" : "nav-links"}>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/experience" onClick={closeMenu}>Experience</NavLink>
        <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
        <NavLink to="/education" onClick={closeMenu}>Education</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
