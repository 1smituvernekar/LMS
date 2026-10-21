
import React, {
  useContext,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import { ShopContext } from "../Context/ShopContext";

import "./PlaceOrder.css";


const PlaceOrder = () => {

  const navigate = useNavigate();


  const {
    cartItems,
    getCartAmount,
    addOrder,
    clearCart,
  } = useContext(ShopContext);


  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    });


  // =========================
  // INPUT CHANGE
  // =========================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };


  // =========================
  // PAYMENT
  // =========================

  const handlePayment = (e) => {

    e.preventDefault();


    if (cartItems.length === 0) {

      alert("Your cart is empty.");

      navigate("/courses");

      return;
    }


    const amount =
      getCartAmount();


    /*
      TEMPORARY PAYMENT

      Later this will become:

      1. Backend create Razorpay order
      2. Open Razorpay
      3. User pays
      4. Backend verifies signature
      5. Create successful order
    */


    const newOrder = {

      id: `LMS-${Date.now()}`,

      items: cartItems,

      amount: amount,

      payment: true,

      paymentMethod: "RAZORPAY",

      status: "Payment Successful",

      date:
        new Date().toLocaleDateString(),

      student: formData,
    };


    // Add order
    addOrder(newOrder);


    // Clear cart
    clearCart();


    // Go to orders
    navigate("/orders");
  };


  const totalAmount =
    getCartAmount();


  return (
    <div className="place-order-page">

      <form
        className="place-order-container"
        onSubmit={handlePayment}
      >


        {/* =========================
            STUDENT DETAILS
        ========================= */}

        <div className="student-details">

          <h1>
            Complete Your Purchase
          </h1>

          <p className="order-subtitle">
            Enter your details before
            purchasing the course.
          </p>


          <div className="two-inputs">

            <input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />

          </div>


          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />


          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />


          <input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />


          <div className="two-inputs">

            <input
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />

            <input
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
            />

          </div>


          <input
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />

        </div>


        {/* =========================
            ORDER SUMMARY
        ========================= */}

        <div className="order-summary">

          <h2>
            Order Summary
          </h2>


          {cartItems.map((course) => (

            <div
              className="order-course"
              key={course._id}
            >

              <img
                src={course.courseThumbnail}
                alt={course.courseTitle}
              />


              <div>

                <h3>
                  {course.courseTitle}
                </h3>

                <p>
                  $
                  {Number(
                    course.finalPrice || 0
                  ).toFixed(2)}
                </p>

              </div>

            </div>

          ))}


          <div className="summary-line">

            <span>
              Courses
            </span>

            <span>
              {cartItems.length}
            </span>

          </div>


          <div className="summary-line">

            <span>
              Payment Method
            </span>

            <span>
              Razorpay
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
            className="payment-button"
            type="submit"
            disabled={
              cartItems.length === 0
            }
          >
            Pay With Razorpay
          </button>


          <p className="payment-note">
            🔒 Secure payment with Razorpay
          </p>

        </div>

      </form>

    </div>
  );
};


export default PlaceOrder;
