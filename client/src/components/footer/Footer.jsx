// Footer.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './Footer.css';

export default function Footer() {
  const githubUrl = 'https://github.com/Djani-Antova';

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="section-container">
          <div className="info">
            <p className="copyright">
              2023 © {" "}
              <strong>
                <a href="https://github.com/Djani-Antova"> BookLet </a>
              </strong>{" "}
               All rights reserved. 
            </p>
      
          </div>
          <ul className="footer-links">
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms of service</a>
            </li>
            <li>
              <a href="/">Cookie Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}