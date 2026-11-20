
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeartPulse,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
} from "lucide-react";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    alert("Login UI ready! Backend authentication will be connected later.");
  }

  return (
    <div className="login-page">
      <div className="login-left">
        <Link to="/" className="login-brand">
          <HeartPulse size={30} />
          <span>Medi<span>Match</span></span>
        </Link>

        <div className="login-welcome">
          <div className="login-badge">WELCOME BACK</div>
          <h1>Your health journey starts here.</h1>
          <p>
            Log in to explore medicines, compare prices and manage
            your prescriptions with MediMatch.
          </p>
          <div className="login-decoration">
            <HeartPulse size={100} />
          </div>
        </div>

        <p className="login-copyright">© 2026 MediMatch</p>
      </div>

      <div className="login-right">
        <Link to="/" className="back-home">
          <ArrowLeft size={17} /> Back to Home
        </Link>

        <div className="login-form-container">
          <div className="login-heading">
            <h2>Welcome back!</h2>
            <p>Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleLogin}>
            <label>Email Address</label>
            <div className="login-input">
              <Mail size={19} />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <label>Password</label>
            <div className="login-input">
              <Lock size={19} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#forgot">Forgot password?</a>
            </div>

            <button type="submit" className="login-submit">
              Log in
            </button>
          </form>

          <p className="signup-text">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;