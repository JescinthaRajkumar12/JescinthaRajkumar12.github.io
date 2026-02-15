import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>© 2026 Jescintha Rajkumar. All rights reserved.</p>

      <div className="social-links">
        <span>Reach me at: </span>

        <a
          href="https://www.linkedin.com/in/jescintha-rajkumar/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/JescinthaRajkumar12"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
