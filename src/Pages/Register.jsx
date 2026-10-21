
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleRegister = (e) => {

    e.preventDefault();


    if (
      formData.password !==
      formData.confirmPassword
    ) {

      alert("Passwords do not match.");

      return;
    }


    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);


    // Backend registration will be connected later

    localStorage.setItem(
      "lmsUser",
      formData.email
    );


    alert("Registration successful!");


    navigate("/login");
  };


  return (
    <div className="register-page">

      <div className="register-card">

        <div className="register-header">

          <h1>
            Create Account 🚀
          </h1>

          <p>
            Start your learning journey today.
          </p>

        </div>


        <form onSubmit={handleRegister}>

          <label>
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />


          <label>
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />


          <label>
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            minLength="8"
            required
          />


          <label>
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            minLength="8"
            required
          />


          <label className="terms">

            <input
              type="checkbox"
              required
            />

            <span>
              I agree to the Terms &
              Conditions
            </span>

          </label>


          <button
            type="submit"
            className="register-button"
          >
            Create Account
          </button>

        </form>


        <p className="login-text">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Register;