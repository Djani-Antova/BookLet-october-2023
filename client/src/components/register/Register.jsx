import './Register.css'

export default function Register() {
    return (
        <div className="register-body">

            <div className="register-container">
                <div>
                    <h1 className="register-title">Sign Up</h1>
                </div>

                <form >

                    <div className="first-name">
                        <label className="first-name-label" htmlFor="fname">Name</label>
                        <input
                            className="first-name-input"
                            name="name"
                            type="text"
                            placeholder="First name"                        
                        />
                    </div>

                    <div className="email">
                        <label className="email-label" htmlFor="email">Email</label>
                        <input
                            className="email-input"
                            name="email"
                            type="email"
                            placeholder="Email"                     
                        />
                    </div>

                    <div className="username">
                        <label className="username-label" htmlFor="username">Username</label>
                        <input
                            className="username-input"
                            name="username"
                            type="text"
                            placeholder="Username"                
                        />
                    </div>

                    <div className="password">
                        <label className="password-label" htmlFor="password">Password</label>
                        <input
                            className="password-input"
                            name="password"
                            type="password"
                            placeholder="Password"
                        
                        />
                    </div>

                    <div className="confirm-password">
                        <label className="confirm-password-label" htmlFor="confirm-password">Confirm password</label>
                        <input 
                            className="confirm-password-input"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </div>
                    <input className="submit-btn"  type="submit" />
                    <p className="login-redirect">
                        Already have an account?
                        <a href="/login" className="login-link">Log in</a>
                    </p>
                </form>
            </div>            
        </div>
);


}
