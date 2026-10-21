
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ShopContext } from "../Context/ShopContext";

import "./Orders.css";


const Orders = () => {

  const navigate = useNavigate();


  const {
    orders,
  } = useContext(ShopContext);


  return (
    <div className="orders-page">

      <div className="orders-container">


        {/* HEADER */}

        <div className="orders-header">

          <h1>
            My Orders
          </h1>

          <p>
            View your purchased courses
            and payment status.
          </p>

        </div>


        {/* NO ORDERS */}

        {orders.length === 0 ? (

          <div className="no-orders">

            <h2>
              No Orders Yet
            </h2>

            <p>
              You have not purchased
              any courses yet.
            </p>

            <button
              onClick={() =>
                navigate("/courses")
              }
            >
              Browse Courses
            </button>

          </div>

        ) : (


          /* ORDERS */

          <div className="orders-list">

            {orders.map((order) => (

              <div
                className="order-card"
                key={order.id}
              >


                {/* ORDER TOP */}

                <div className="order-top">

                  <div>

                    <span>
                      Order ID
                    </span>

                    <strong>
                      {order.id}
                    </strong>

                  </div>


                  <span
                    className={
                      order.payment
                        ? "status paid"
                        : "status pending"
                    }
                  >

                    {order.payment
                      ? "Payment Successful"
                      : "Payment Pending"}

                  </span>

                </div>


                {/* COURSES */}

                <div className="order-course-list">

                  {order.items?.map(
                    (course) => (

                      <div
                        className="ordered-course"
                        key={course._id}
                      >

                        <img
                          src={
                            course.courseThumbnail
                          }
                          alt={
                            course.courseTitle
                          }
                        />


                        <div>

                          <h3>
                            {course.courseTitle}
                          </h3>

                          <p>
                            $
                            {Number(
                              course.finalPrice ||
                                0
                            ).toFixed(2)}
                          </p>

                        </div>

                      </div>

                    )
                  )}

                </div>


                {/* ORDER BOTTOM */}

                <div className="order-bottom">

                  <div>

                    <span>
                      Date
                    </span>

                    <strong>
                      {order.date}
                    </strong>

                  </div>


                  <div>

                    <span>
                      Payment
                    </span>

                    <strong>
                      {order.paymentMethod}
                    </strong>

                  </div>


                  <div>

                    <span>
                      Total
                    </span>

                    <strong>
                      $
                      {Number(
                        order.amount || 0
                      ).toFixed(2)}
                    </strong>

                  </div>

                </div>


              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};


export default Orders;
