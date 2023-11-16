import { Link } from 'react-router-dom'
import "./Navigation.css"; // Import the CSS file
import Logo from "/images/booklet-high-resolution-logo-white-transparent.png";

const Navigation = () => {
  // const { user } = UseAuth();

  return (
    <header>
        <div className="container">
            <p>
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="BookLet Logo" />
                </Link>
            </p>
            <nav>
                <ul>
                    <li>
                        <Link to="/books">All Nominations</Link>
                    </li>
                    <li>
                        <Link to="/books/create">Nominate Book</Link>
                    </li>
                    <li>
                        <Link to="/latest">Trending</Link>
                    </li>
                    {/* <!-- Logged-in users --> */}
             {/* <div id="user">
                        <Link to="/games/create">Nominate Book</Link>
                        <Link to="/logout">Logout</Link>
            </div> */}
                      {/* <!-- Guest users --> */}
            {/* <div id="guest"> */}
                    <li>
                        <Link className="nav-link" id="login" to="/login">
                            <i className="fa fa-user" /> Login
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" id="register" to="/register">
                        <i className="fa-solid fa-right-to-bracket"></i> Register
                        
                        </Link>
                    </li>
            {/* </div> */}

                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                        <i className="fa fa-search" />
                    </button>
                </ul>
            </nav>
        </div>
    </header>
  );
};

export default Navigation;
