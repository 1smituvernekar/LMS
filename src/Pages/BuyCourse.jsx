
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./BuyCourse.css";

const BuyCourse = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { addToCart } = useContext(ShopContext);

  const course = state?.course;

  if (!course) {
    return (
      <div className="buy-course-empty">
        <h2>Course not found</h2>
        <button onClick={() => navigate("/courses")}>
          Go To Courses
        </button>
      </div>
    );
  }

  const discountedPrice =
    course.coursePrice -
    (course.coursePrice * course.discount) / 100;

  const handleBuyNow = () => {
    addToCart(course);
    navigate("/place-order");
  };

  return (
    <div className="buy-course-page">

      <div className="buy-course-container">

        <div className="buy-course-left">

          <img
            src={course.courseThumbnail}
            alt={course.courseTitle}
            className="buy-course-image"
          />

          <h1>{course.courseTitle}</h1>

          <p
            dangerouslySetInnerHTML={{
              __html: course.courseDescription,
            }}
          />

          <div className="course-info-box">

            <div>
              <strong>{course.courseContent?.length || 0}</strong>
              <span>Chapters</span>
            </div>

            <div>
              <strong>
                {course.courseContent?.reduce(
                  (total, chapter) =>
                    total + (chapter.chapterContent?.length || 0),
                  0
                )}
              </strong>
              <span>Lessons</span>
            </div>

            <div>
              <strong>{course.discount}%</strong>
              <span>Discount</span>
            </div>

          </div>

        </div>

        <div className="buy-course-card">

          <h2>Buy This Course</h2>

          <div className="price-row">
            <span>Original Price</span>
            <span>${course.coursePrice}</span>
          </div>

          <div className="price-row discount-row">
            <span>Discount</span>
            <span>{course.discount}% OFF</span>
          </div>

          <div className="price-total">
            <span>Total</span>
            <strong>
              ${discountedPrice.toFixed(2)}
            </strong>
          </div>

          <button
            className="buy-now-button"
            onClick={handleBuyNow}
          >
            Continue To Payment
          </button>

          <p className="secure-text">
            🔒 Secure payment powered by Razorpay
          </p>

          <ul>
            <li>✓ Lifetime course access</li>
            <li>✓ Preview lessons before purchase</li>
            <li>✓ Full videos after payment</li>
            <li>✓ Learn at your own pace</li>
          </ul>

        </div>

      </div>

    </div>
  );
};

export default BuyCourse;