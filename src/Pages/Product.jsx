
import React, { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { dummyCourses } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";
import "./Product.css";

const Product = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const { addToCart } =
    useContext(ShopContext);


  // Find course
  const course = dummyCourses.find(
    (item) => item._id === id
  );


  // Course not found
  if (!course) {

    return (
      <div className="course-not-found">

        <h2>Course Not Found</h2>

        <Link to="/courses">
          Back to Courses
        </Link>

      </div>
    );
  }


  // Calculate discounted price
  const finalPrice =
    Number(course.coursePrice) -
    (Number(course.coursePrice) *
      Number(course.discount || 0)) /
      100;


  // =========================
  // BUY COURSE
  // =========================

  const handleBuyCourse = () => {

    addToCart(course);

    navigate("/cart");
  };


  return (
    <div className="course-details">


      {/* =========================
          LEFT
      ========================= */}

      <div className="course-left">

        <img
          src={course.courseThumbnail}
          alt={course.courseTitle}
          className="course-main-image"
        />


        <h1>
          {course.courseTitle}
        </h1>


        <div
          className="course-description"
          dangerouslySetInnerHTML={{
            __html:
              course.courseDescription,
          }}
        />


        <h2>
          Course Content
        </h2>


        <div className="course-content">

          {course.courseContent?.map(
            (chapter) => (

              <div
                className="chapter"
                key={chapter.chapterId}
              >

                <h3>
                  {chapter.chapterTitle}
                </h3>


                {chapter.chapterContent?.map(
                  (lecture) => (

                    <div
                      className="lecture"
                      key={lecture.lectureId}
                    >

                      <div>

                        <strong>
                          {lecture.lectureTitle}
                        </strong>

                        <p>
                          {lecture.lectureDuration}{" "}
                          minutes
                        </p>

                      </div>


                      {lecture.isPreviewFree ? (

                        <span className="preview">
                          ▶ Preview
                        </span>

                      ) : (

                        <span className="locked">
                          🔒 Locked
                        </span>

                      )}

                    </div>

                  )
                )}

              </div>

            )
          )}

        </div>

      </div>


      {/* =========================
          RIGHT
      ========================= */}

      <div className="course-right">

        <div className="purchase-card">

          <h2>
            {course.courseTitle}
          </h2>


          <div className="old-price">
            ${Number(course.coursePrice).toFixed(2)}
          </div>


          <div className="price">

            ${finalPrice.toFixed(2)}

          </div>


          <p className="discount">

            {course.discount || 0}% OFF

          </p>


          <p className="purchase-text">

            Get complete access to all course
            lessons after successful payment.

          </p>


          <button
            className="buy-button"
            onClick={handleBuyCourse}
          >
            Buy Course
          </button>


          <p className="secure-text">

            🔒 Secure payment with Razorpay

          </p>

        </div>

      </div>

    </div>
  );
};

export default Product;
