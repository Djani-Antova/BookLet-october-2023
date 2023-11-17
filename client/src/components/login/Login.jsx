import './Login.css'

export default function Login() {

  return (
    
    <div className="login-body">
        <div className="login-container">
            <div>
                <h1 className="login-title">Sign In</h1>
            </div>

            <form >
                <div className="email">
                    <label className="email-label" htmlFor="email">Email </label>
                    <input className="email-input" name="email" type="email" placeholder="Email" />
                </div>

                <div className="password">
                    <label className="password-label" htmlFor="password">Password</label>
                    <input className="password-input" name="password" type="password" placeholder="Password" />
                </div>

                <input className="submit-btn"  type="submit" value="Log in" />
                <p className="register-redirect">
                    Don't have an account?
                    <a href="/register" className="register-link">Sign up</a>
                </p>
            </form>
        </div>

    </div>
  )
  
}