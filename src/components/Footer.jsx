import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-flex">
        <p className="footer-text">© {new Date().getFullYear()} GigFloww</p>
        <p className="footer-text">Designed by Janakiram Kusu </p>
      </div>
    </footer>
  );
};

export default Footer;
