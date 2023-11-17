import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const githubUrl = 'https://github.com/Djani-Antova';

  return (
    <footer className="site-footer section">
      <div className="container">
        <div className="section-container">

          {/* <div className="columns">
            <div className="newsletter">
              <h5>BookLet</h5>
              <p>
                Join our newsletter to stay up yo date on our features and
                releases
              </p>
              <form action="#">
                <input
                  type="text"
                  placeholder="Enter your email"
                  name="newsletter-email"
                  id="newsletter-email-footer"
                  className="subscribe-input"
                />
                <button type="submit" className="subscribe-button">
                  Subscribe
                </button>
              </form>
              <p>
                By subscribing you agree with our Privacy Policy and provide
                consent to receive updates from our company.
              </p>
            </div>
            <div className="panel">
              <h6>About us</h6>
              <ul>
                <li>
                  <a href="">Popular</a>
                </li>
                <li>
                  <a href="">Trending</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Support/Help</a>
                </li>
              </ul>
            </div>
            <div className="panel">
              <h6>More ...</h6>
              <ul>
                <li>
                  <a href="">Popular</a>
                </li>
                <li>
                  <a href="">Trending</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Support/Help</a>
                </li>
              </ul>
            </div>
            <div className="panel">
              <h6>Follow us</h6>
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i className="fab fa-twitter" />
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i className="fab fa-tiktok" />
                    <span>Tik Tok</span>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
          
          <div className="info">
            <p className="copyright">
              2023 ©{" "}
              <strong>
                <a href="https://github.com/Djani-Antova">BookLet</a>
              </strong>{" "}
              - All rights reserved.
            </p>
            <ul className="socials">
              <li>
                <a href={githubUrl} className="github-page">
                <FontAwesomeIcon icon={faGithub} style={{ color: '#0088a9' }} />
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Cookie Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
