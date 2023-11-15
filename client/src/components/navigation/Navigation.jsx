import React from "react";
import "./Navigation.css"; // Import the CSS file

const Navigation = () => {
  // const { user } = UseAuth();

  return (
    <header>
      <div className="container">
        <p>
          <a className="navbar-brand" href="index.html">
            <span>BookLet</span>
          </a>
        </p>
        <nav>
          <ul>
            <li>
              <a href="/">Nominations</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a className="nav-link" id="login" href="#">
                <i className="fa fa-user" /> Login
              </a>
            </li>
            <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
              <i className="fa fa-search"  />
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
