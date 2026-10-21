
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={assets.logo} alt="LMS Logo" />
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/educator">Educator</Link>
          <Link to="/my-courses">My Courses</Link>
        </div>

        {/* Search */}
        <div className="navbar-search">
          <img src={assets.search_icon} alt="Search" />

          <input
            type="text"
            placeholder="Search courses..."
          />
        </div>

        {/* Right Side */}
        <div className="navbar-right">

          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="register-btn">
            Register
          </Link>

          <Link to="/orders" className="profile-icon">
            <img
              src={assets.user_icon}
              alt="Profile"
            />
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
