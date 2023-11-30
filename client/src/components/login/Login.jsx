import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../../contexts/authContext";
import {
  runEmptyEmailField,
  runEmptyPasswordField,
  runInvalidSignIn,
  onLoginSuccess,
} from "../../utils/alerts";

import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { loginSubmitHandler } = useContext(AuthContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!values.email) {
      runEmptyEmailField();
      return;
    }

    if (!values.password) {
      runEmptyPasswordField();
      return;
    }

    try {
      await loginSubmitHandler(values);
      onLoginSuccess();
      navigate("/");
    } catch (error) {
      runInvalidSignIn();
      console.error(error);
    }
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div>
          <h1 className="login-title">Sign In</h1>
        </div>

        <form onSubmit={handleLoginSubmit}>
          <div className="email">
            <label className="email-label" htmlFor="email">
              Email{" "}
            </label>
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

          <input className="submit-btn" type="submit" value="Log in" />
          <p className="register-redirect">
            Don't have an account?
            <Link to="/register" className="register-link">
              {" "}
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
