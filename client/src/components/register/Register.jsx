import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";

import useForm from "../hooks/useForm";

import './Register.css'

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const {values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    })



    return (
        <div className="register-body">

            <div className="register-container">
                <div>
                    <h1 className="register-title">Sign Up</h1>
                </div>

                <form onSubmit={onSubmit}>

                    <div className="first-name">
                        <label className="first-name-label" htmlFor="fname">Name</label>
                        <input
                            className="first-name-input"
                            name="name"
                            type="text"
                            placeholder="First name"
                            onChange={onChange}
                            value={values.name}                        
                        />
                    </div>

                    <div className="email">
                        <label className="email-label" htmlFor="email">Email</label>
                        <input
                            className="email-input"
                            name="email"
                            type="email"
                            placeholder="Email"  
                            onChange={onChange} 
                            value={values.email}                  
                        />
                    </div>

                    <div className="username">
                        <label className="username-label" htmlFor="username">Username</label>
                        <input
                            className="username-input"
                            name="username"
                            type="text"
                            placeholder="Username"   
                            onChange={onChange}  
                            value={values.username}           
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

                    <div className="confirm-password">
                        <label className="confirm-password-label" htmlFor="confirm-password">Confirm password</label>
                        <input 
                            className="confirm-password-input"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            onChange={onChange}
                            value={values.confirmPassword}
                        />
                    </div>
                    <input className="submit-btn"  type="submit" />
                    <p className="login-redirect">
                        Already have an account?
                        <Link to="/login" className="login-link">Log in</Link>
                    </p>
                </form>
            </div>            
        </div>
);


}
