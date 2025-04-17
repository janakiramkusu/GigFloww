import React, { useState } from 'react';
import { FaUserPlus, FaHome, FaInfoCircle, FaStar, FaHandshake, FaComments } from 'react-icons/fa';

function Navbar() {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const handleLinkClick = () => {
    if (window.innerWidth < 992) {
      setIsNavbarCollapsed(true);
    }
  };

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <FaComments className="me-2 text-primary" /> GigFloww
        </a>

        <button
          className="navbar-toggler "
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isNavbarCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ fontSize: '1.2rem' }}></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={handleLinkClick}>
                <FaHome className="me-1" /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleLinkClick}>
                <FaInfoCircle className="me-1" /> About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features" onClick={handleLinkClick}>
                <FaStar className="me-1" /> Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#join" onClick={handleLinkClick}>
                <FaHandshake className="me-1" /> Join
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials" onClick={handleLinkClick}>
                <FaComments className="me-1" /> Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#signup" onClick={handleLinkClick}>
                <FaUserPlus className="me-1" /> Signup
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
