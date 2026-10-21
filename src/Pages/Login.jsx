
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    // Backend login will be connected later
    localStorage.setItem("lmsUser", email);

    navigate("/courses");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-header">
          <h1>Welcome Back 👋</h1>

          <p>
            Login to continue your learning journey.
          </p>
        </div>

        <form onSubmit={handleLogin}>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="login-options">

            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#forgot">
              Forgot Password?
            </a>

          </div>

          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>

        </form>

        <div className="login-divider">
          <span>OR</span>
        </div>

        <p className="register-text">
          Don't have an account?

          <Link to="/register">
            Create Account
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Login;

