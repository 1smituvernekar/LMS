
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import "./MyCourses.css";

const MyCourses = () => {
  const navigate = useNavigate();

  const { orders = [] } = useContext(ShopContext);

  // Store only successfully paid courses
  const purchasedCourses = [];

  orders.forEach((order) => {
    // Only paid orders
    if (order?.payment === true) {
      order?.items?.forEach((course) => {
        // Course ID
        const courseId = course?._id || course?.id;

        // Avoid duplicate courses
        const alreadyExists = purchasedCourses.some(
          (item) => (item?._id || item?.id) === courseId
        );

        if (!alreadyExists && courseId) {
          purchasedCourses.push(course);
        }
      });
    }
  });

  return (
    <div className="my-courses-page">
      <div className="my-courses-container">

        {/* HEADER */}
        <div className="my-courses-header">
          <div>
            <h1>My Courses</h1>

            <p>
              Continue learning from where you left off.
            </p>
          </div>

          <button onClick={() => navigate("/courses")}>
            Browse Courses
          </button>
        </div>

        {/* EMPTY */}
        {purchasedCourses.length === 0 ? (
          <div className="my-courses-empty">

            <div className="empty-icon">
              🎓
            </div>

            <h2>No Courses Yet</h2>

            <p>
              Purchase a course to start learning.
            </p>

            <button onClick={() => navigate("/courses")}>
              Explore Courses
            </button>

          </div>
        ) : (

          /* COURSE GRID */
          <div className="my-courses-grid">

            {purchasedCourses.map((course) => {

              const courseId =
                course?._id || course?.id;

              return (
                <div
                  className="my-course-card"
                  key={courseId}
                >

                  {/* COURSE IMAGE */}
                  <img
                    src={
                      course?.courseThumbnail ||
                      course?.image ||
                      ""
                    }
                    alt={
                      course?.courseTitle ||
                      course?.name ||
                      "Course"
                    }
                  />

                  <div className="my-course-content">

                    {/* TITLE */}
                    <h2>
                      {course?.courseTitle ||
                        course?.name ||
                        "Course"}
                    </h2>

                    {/* DESCRIPTION */}
                    <p>
                      {course?.courseDescription
                        ?.replace(/<[^>]*>/g, "")
                        .slice(0, 100) ||
                        "Continue learning this course."}

                      ...
                    </p>

                    {/* PROGRESS */}
                    <div className="progress-info">

                      <span>
                        Progress
                      </span>

                      <span>
                        0%
                      </span>

                    </div>

                    <div className="progress-bar">

                      <div
                        className="progress"
                        style={{
                          width: "0%",
                        }}
                      />

                    </div>

                    {/* BUTTON */}
                    <button
                      className="continue-learning"
                      onClick={() =>
                        navigate(`/product/${courseId}`)
                      }
                    >
                      Continue Learning
                    </button>

                  </div>
                </div>
              );
            })}

          </div>
        )}

      </div>
    </div>
  );
};

export default MyCourses;
