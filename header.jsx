// Import your CSS file for styling

import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './header.css'; // Import your CSS file for styling
import Briefcase from './assets/briefcase icon.gif';
import Boat from './assets/boaticon.gif';
import Phone from './assets/telephone-book icon.gif';
import ResumeIcon from './assets/resumeicon.gif';

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    const imageElement = document.getElementById('headerImage');
    const titleElement = document.getElementById('headertitle');

    if (location.pathname === '/portfolio') {
      imageElement.src = Briefcase;
      titleElement.innerHTML = 'Portfolio';
    } else if (location.pathname === '/contact') {
      imageElement.src = Phone;
      titleElement.innerHTML = 'Contact:';
    } else if (location.pathname === '/resume') {
      imageElement.src = ResumeIcon;
      titleElement.innerHTML = 'Resume:';
    } else {
      imageElement.src = Boat;
      titleElement.innerHTML = 'About Me:';

    }

    return () => {
      // Cleanup logic if needed
    };
  }, [location.pathname]);

  return (
    <Navbar>
      <Navbar.Brand>Dylan Main</Navbar.Brand>
      <Nav className="ml-auto">
        <Link to="/" className="nav-link">About Me</Link>
        <Link to="/portfolio" className="nav-link">Portfolio</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/resume" className="nav-link">Resume</Link>
      </Nav>
      <div className="header-middle"> 
        <h2 id='headertitle'>About Me:</h2>
      </div>      <img id="headerImage" src={Boat} alt="Header Image" />
    </Navbar>
  );
};

export default Header;
