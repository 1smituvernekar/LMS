
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import "./Cart.css";

const Cart = () => {

  const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    getCartAmount,
  } = useContext(ShopContext);


  const totalAmount = getCartAmount();


  const handleCheckout = () => {

    if (cartItems.length === 0) {
      return;
    }

    navigate("/place-order");
  };


  return (
    <div className="cart-page">

      <div className="cart-container">


        {/* HEADER */}

        <div className="cart-header">

          <h1>
            My Cart
          </h1>

          <p>
            Review your selected courses
            before payment.
          </p>

        </div>


        {/* EMPTY CART */}

        {cartItems.length === 0 ? (

          <div className="empty-cart">

            <div className="empty-cart-icon">
              🛒
            </div>

            <h2>
              Your Cart Is Empty
            </h2>

            <p>
              You haven't added any courses yet.
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


          <div className="cart-layout">


            {/* =========================
                CART ITEMS
            ========================= */}

            <div className="cart-items">

              {cartItems.map((course) => (

                <div
                  className="cart-item"
                  key={course._id}
                >

                  <img
                    src={course.courseThumbnail}
                    alt={course.courseTitle}
                    className="cart-course-image"
                  />


                  <div className="cart-course-info">

                    <h2>
                      {course.courseTitle}
                    </h2>


                    <p className="cart-description">

                      {course.courseDescription
                        ?.replace(/<[^>]*>/g, "")
                        .slice(0, 120)}

                      ...

                    </p>


                    <div className="cart-course-bottom">

                      <strong>

                        $
                        {Number(
                          course.finalPrice || 0
                        ).toFixed(2)}

                      </strong>


                      <button
                        className="remove-button"
                        onClick={() =>
                          removeFromCart(
                            course._id
                          )
                        }
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>


            {/* =========================
                SUMMARY
            ========================= */}

            <div className="cart-summary">

              <h2>
                Order Summary
              </h2>


              <div className="summary-row">

                <span>
                  Courses
                </span>

                <span>
                  {cartItems.length}
                </span>

              </div>


              <div className="summary-row">

                <span>
                  Subtotal
                </span>

                <span>
                  ${totalAmount.toFixed(2)}
                </span>

              </div>


              <div className="summary-row">

                <span>
                  Discount
                </span>

                <span className="green-text">
                  Included
                </span>

              </div>


              <div className="summary-total">

                <span>
                  Total
                </span>

                <strong>
                  ${totalAmount.toFixed(2)}
                </strong>

              </div>


              <button
                className="checkout-button"
                onClick={handleCheckout}
              >
                Continue To Payment
              </button>


              <button
                className="continue-button"
                onClick={() =>
                  navigate("/courses")
                }
              >
                Continue Shopping
              </button>


              <p className="secure-payment">
                🔒 Secure payment with Razorpay
              </p>

            </div>

          </div>

        )}

      </div>

    </div>
  );
};

export default Cart;
