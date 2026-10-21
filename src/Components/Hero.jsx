
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import "./Hero.css";

const Hero = () => {
  const[search,setSearch] = useState('')
  return (
    <section className="hero-container">

      {/* Background Shapes */}
      <div className="hero-circle circle-one"></div>
      <div className="hero-circle circle-two"></div>

      <div className="hero">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          <div className="hero-badge">
            <span>✦</span>
            Learn. Build. Grow.
          </div>

          <h1>
            Build Your
            <span> Future</span>
            <br />
            With The Right Skills.
          </h1>

          <p>
            Learn practical skills from expert-led courses and
            turn your knowledge into real-world opportunities.
            Start learning today and take your career to the next level.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <Link to="/courses" className="hero-primary-btn">
              Explore Courses
              <span>→</span>
            </Link>

            <Link to="/register" className="hero-secondary-btn">
              Get Started
            </Link>

          </div>

          {/* Search */}
          {/* Search */}
<div className="hero-search">

  <img
    src={assets.search_icon}
    alt="Search"
  />

  <input
    type="text"
    placeholder="What do you want to learn?"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <button
    onClick={() => {
      if (search.trim()) {
        window.location.href = `/courses?search=${encodeURIComponent(search)}`;
      }
    }}
  >
    Search
  </button>

</div>
          {/* Small Stats */}
          <div className="hero-stats">

            <div className="hero-stat">
              <strong>10K+</strong>
              <span>Students</span>
            </div>

            <div className="stat-line"></div>

            <div className="hero-stat">
              <strong>50+</strong>
              <span>Courses</span>
            </div>

            <div className="stat-line"></div>

            <div className="hero-stat">
              <strong>95%</strong>
              <span>Success Rate</span>
            </div>

          </div>

        </div>


        {/* RIGHT CONTENT */}
        <div className="hero-right">

          <div className="hero-image-wrapper">

            {/* Main Circle */}
            <div className="hero-main-circle">

              <div className="hero-learning-icon">
                🎓
              </div>

              <div className="hero-code-box">
                {"</>"}
              </div>

              <div className="hero-play">
                ▶
              </div>

            </div>


            {/* Floating Card 1 */}
            <div className="floating-card card-course">

              <div className="card-icon">
                💻
              </div>

              <div>
                <strong>Web Development</strong>
                <span>120+ Lessons</span>
              </div>

            </div>


            {/* Floating Card 2 */}
            <div className="floating-card card-student">

              <div className="student-avatars">
                <span>👨🏻</span>
                <span>👩🏻</span>
                <span>👨🏽</span>
              </div>

              <div>
                <strong>10K+</strong>
                <span>Happy Learners</span>
              </div>

            </div>


            {/* Floating Card 3 */}
            <div className="floating-card card-rating">

              <span className="star">★</span>

              <div>
                <strong>4.9 / 5</strong>
                <span>Course Rating</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;

