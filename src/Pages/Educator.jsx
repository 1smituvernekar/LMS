
import React from "react";
import { Link } from "react-router-dom";
import "./Educator.css";

const Educator = () => {

  return (
    <div className="educator-page">

      <div className="educator-container">


        {/* HEADER */}

        <div className="educator-header">

          <div>

            <p className="educator-label">
              EDUCATOR DASHBOARD
            </p>

            <h1>
              Welcome, Educator 👋
            </h1>

            <p>
              Manage your courses and
              track your students.
            </p>

          </div>

          <button className="create-course-button">
            + Create Course
          </button>

        </div>


        {/* STATISTICS */}

        <div className="educator-stats">

          <div className="stat-card">

            <div className="stat-icon">
              📚
            </div>

            <div>
              <span>
                Total Courses
              </span>

              <strong>
                8
              </strong>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon">
              👨‍🎓
            </div>

            <div>
              <span>
                Total Students
              </span>

              <strong>
                245
              </strong>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon">
              💰
            </div>

            <div>
              <span>
                Total Earnings
              </span>

              <strong>
                $4,850
              </strong>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon">
              ⭐
            </div>

            <div>
              <span>
                Average Rating
              </span>

              <strong>
                4.8
              </strong>
            </div>

          </div>

        </div>


        {/* DASHBOARD */}

        <div className="educator-content">


          {/* COURSES */}

          <div className="educator-section">

            <div className="section-header">

              <div>

                <h2>
                  My Courses
                </h2>

                <p>
                  Manage your published courses.
                </p>

              </div>

              <Link to="/courses">
                View Courses
              </Link>

            </div>


            <div className="educator-course-list">


              <div className="educator-course">

                <div className="course-small-icon">
                  HTML
                </div>

                <div className="educator-course-info">

                  <h3>
                    HTML & CSS Complete Course
                  </h3>

                  <p>
                    35 Lessons • 120 Students
                  </p>

                </div>

                <span className="published">
                  Published
                </span>

              </div>


              <div className="educator-course">

                <div className="course-small-icon">
                  JS
                </div>

                <div className="educator-course-info">

                  <h3>
                    JavaScript for Beginners
                  </h3>

                  <p>
                    42 Lessons • 85 Students
                  </p>

                </div>

                <span className="published">
                  Published
                </span>

              </div>


              <div className="educator-course">

                <div className="course-small-icon">
                  R
                </div>

                <div className="educator-course-info">

                  <h3>
                    React Complete Guide
                  </h3>

                  <p>
                    50 Lessons • 60 Students
                  </p>

                </div>

                <span className="draft">
                  Draft
                </span>

              </div>

            </div>

          </div>


          {/* QUICK ACTIONS */}

          <div className="quick-actions">

            <h2>
              Quick Actions
            </h2>


            <button>
              📚 Manage Courses
            </button>


            <button>
              ➕ Add New Course
            </button>


            <button>
              👨‍🎓 View Students
            </button>


            <button>
              💰 View Earnings
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Educator;
