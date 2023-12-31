import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';
import Path from '../../paths';

import Logo from "/images/booklet-high-resolution-logo-white-transparent.png";

import "./Navigation.css"; 

const Navigation = () => {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);

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
                            <div id='all'>
                                <Link to={Path.List}>All Nominations</Link>  
                                <Link to={Path.Latest}>Recent</Link>
                                <Link to={Path.About}>About</Link>
                            </div>
                           
                            {isAuthenticated && (
                            <div id='user'>
                                <Link to="/create">Nominate Book</Link>                      
                                <Link className="nav-link" id="logout" to="/logout">Logout</Link>
                                <Link className="nav-link" id="account" to="/account"> {username}'s Account</Link>
                            </div>
                            )}   
                        

                            {!isAuthenticated && (
                                <div id='guest'>
                                <Link className="nav-link" id="login" to="/login"><i className="fa fa-user" /> Login </Link>                      
                                <Link className="nav-link" id="register" to="/register"> <i className="fa-solid fa-right-to-bracket"></i> Register   </Link>
                                </div>
                            )}                   

                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;