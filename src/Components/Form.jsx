
import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="form-section">

      <div className="form-container">

        {/* LEFT */}
        <div className="form-info">

          <span className="form-badge">
            ✦ Let's Connect
          </span>

          <h2>
            Have Questions?
            <span> We're Here To Help.</span>
          </h2>

          <p>
            Whether you have a question about our courses,
            payments, learning paths, or anything else,
            feel free to contact us.
          </p>

          <div className="form-info-item">
            <div className="form-icon">📧</div>
            <div>
              <strong>Email</strong>
              <p>support@learnhub.com</p>
            </div>
          </div>

          <div className="form-info-item">
            <div className="form-icon">📞</div>
            <div>
              <strong>Phone</strong>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="form-info-item">
            <div className="form-icon">📍</div>
            <div>
              <strong>Location</strong>
              <p>India</p>
            </div>
          </div>

        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-group">

            <label>Your Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Message</label>

            <textarea
              name="message"
              placeholder="Write your message..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

          </div>

          <button type="submit" className="form-submit-btn">
            Send Message
            <span>→</span>
          </button>

        </form>

      </div>

    </section>
  );
};

export default Form;
