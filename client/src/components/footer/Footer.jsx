import React from 'react';
import { Link } from 'react-router-dom';

import Path from '../../paths';
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
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  BookLet
                </a>
              </strong>{" "}
              All rights reserved.
            </p>
          </div>
          <ul className="footer-links">
            <li>
              <Link to={Path.Privacy}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={Path.Terms}>Terms of Service</Link>
            </li>
            <li>
              <Link to={Path.Cookies}>Cookie Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
