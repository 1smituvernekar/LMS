
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            Learn<span>Hub</span>
          </Link>

          <p>
            Learn practical skills, build real projects,
            and grow your career with expert-led courses.
          </p>

          <div className="footer-social">

            <a href="#" aria-label="Facebook">
              f
            </a>

            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="LinkedIn">
              in
            </a>

            <a href="#" aria-label="YouTube">
              ▶
            </a>

          </div>

        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>

        </div>

        {/* COURSES */}
        <div className="footer-column">

          <h3>Popular Courses</h3>

          <Link to="/courses">HTML & CSS</Link>
          <Link to="/courses">JavaScript</Link>
          <Link to="/courses">React JS</Link>
          <Link to="/courses">Full Stack</Link>

        </div>

        {/* SUPPORT */}
        <div className="footer-column">

          <h3>Support</h3>

          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/my-courses">My Courses</Link>

          <a href="mailto:support@learnhub.com">
            Help Center
          </a>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 LearnHub. All rights reserved.
        </p>

        <div className="footer-bottom-links">

          <a href="#">
            Privacy Policy
          </a>

          <a href="#">
            Terms & Conditions
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
