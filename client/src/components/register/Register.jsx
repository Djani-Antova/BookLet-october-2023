import { useContext, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from "../../contexts/authContext";
import { useNavigate, Link } from "react-router-dom";
import {
  runEmptyNameError,
  runEmptyEmailField,
  runEmailLengthError,
  runEmptyUsernameError,
  runEmptyPasswordField,
  runPasswordLengthError,
  runEmptyConfirmPasswordField,
  runPasswordEqualityCheck,
  runSuccessfulRegistration,
} from "../../utils/alerts";
import Path from "../../paths";

import "./Register.css";

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      if (values.name === "") {
        runEmptyNameError();
        return;
      } else if (values.email === "") {
        runEmptyEmailField();
        return;
      } else if (values.email.length < 10) {
        runEmailLengthError();
        return;
      } else if (values.username === "") {
        runEmptyUsernameError();
        return;
      } else if (values.password === "") {
        runEmptyPasswordField();
        return;
      } else if (values.password.length < 6) {
        runPasswordLengthError();
        return;
      } else if (values.confirmPassword === "") {
        runEmptyConfirmPasswordField();
        return;
      } else if (values.password !== values.confirmPassword) {
        runPasswordEqualityCheck();
        return;
      }

      await registerSubmitHandler(values);
      runSuccessfulRegistration();
      navigate(Path.Home);
    } catch (error) {
      console.error("Error during registration:", error);
      toast.info('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-body">
      <div className="register-container">
        <div>
          <h1 className="register-title">Sign Up</h1>
        </div>

        <form onSubmit={handleRegisterSubmit}>
          <div className="first-name">
            <label className="first-name-label" htmlFor="fname">
              Name
            </label>
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
            <label className="email-label" htmlFor="email">
              Email
            </label>
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
            <label className="username-label" htmlFor="username">
              Username
            </label>
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
            <label className="password-label" htmlFor="password">
              Password
            </label>
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
            <label className="confirm-password-label" htmlFor="confirm-password">
              Confirm password
            </label>
            <input
              className="confirm-password-input"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={onChange}
              value={values.confirmPassword}
            />
          </div>

          <input className="submit-btn" type="submit" />
          <p className="login-redirect">
            Already have an account?
            <Link to={Path.Login} className="login-link">
              {" "}
              Log in
            </Link>
          </p>
        </form>

        <ToastContainer /> {/* React Toastify container */}
      </div>
    </div>
  );
}
