
import React from "react";
import { useNavigate } from "react-router-dom";
import { dummyCourses } from "../assets/assets";
import "./Courses.css";

const Courses = () => {
  const navigate = useNavigate();

  return (
    <div className="courses-page">

      <div className="courses-container">

        {/* HEADER */}
        <div className="courses-header">
          <h1>Explore Our Courses</h1>

          <p>
            Learn new skills and build your career
            with our practical courses.
          </p>
        </div>

        {/* COURSE GRID */}
        <div className="courses-grid">

          {dummyCourses
            .filter((course) => course.isPublished)
            .map((course) => (

              <div
                className="course-card"
                key={course._id}
              >

                {/* IMAGE */}
                <img
                  src={course.courseThumbnail}
                  alt={course.courseTitle}
                  className="course-image"
                />

                {/* CONTENT */}
                <div className="course-content">

                  <h2>
                    {course.courseTitle}
                  </h2>

                  <p>
                    {course.courseDescription
                      ?.replace(/<[^>]*>/g, "")
                      .slice(0, 120)}
                    ...
                  </p>

                  {/* PRICE */}
                  <div className="course-price">

                    <span>
                      ₹{course.coursePrice}
                    </span>

                    {course.discount > 0 && (
                      <span className="discount">
                        {course.discount}% OFF
                      </span>
                    )}

                  </div>

                  {/* BUTTON */}
                  <button
                    onClick={() =>
                      navigate(`/product/${course._id}`)
                    }
                  >
                    View Course
                  </button>

                </div>

              </div>

            ))}

        </div>

      </div>

    </div>
  );
};

export default Courses;
