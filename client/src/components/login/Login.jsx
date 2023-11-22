import { Link } from "react-router-dom";
import { useContext } from "react";

import useForm  from "../hooks/useForm" ;
import AuthContext from "../../contexts/authContext";

import './Login.css'

export default function Login() {

    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        email: '',
        password: ''
    });

  return (
    
    <div className="login-body">
        <div className="login-container">
            <div>
                <h1 className="login-title">Sign In</h1>
            </div>

            <form onSubmit={onSubmit}>
                <div className="email">
                    <label className="email-label" htmlFor="email">Email </label>
                    <input 
                        className="email-input" 
                        name="email" 
                        type="email" 
                        placeholder="johnsmith@gmail.com" 
                        onChange={onChange}
                        value={values.email}
                    />
                </div>

                <div className="password">
                    <label className="password-label" htmlFor="password">Password</label>
                    <input 
                        className="password-input" 
                        name="password" 
                        type="password" 
                        placeholder="Password" 
                        onChange={onChange}
                        value={values.password}
                    />
                </div>

                <input className="submit-btn"  type="submit" value="Log in" />
                <p className="register-redirect">
                    Don't have an account?
                    <Link to="/register" className="register-link"> Sign up</Link>
                </p>
            </form>
        </div>

    </div>
  )
  
}