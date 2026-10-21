
import React from "react";
import { Link } from "react-router-dom";
import "./ProductItem.css";

const ProductItem = ({ dummyCourse }) => {
  return (
    <div className="product-card">

      <Link
        to={`/product/${dummyCourse._id}`}
        className="product-link"
      >

        <img
          src={dummyCourse.courseThumbnail}
          alt={dummyCourse.courseTitle}
          className="product-image"
        />

        <div className="product-info">

          <h3>{dummyCourse.courseTitle}</h3>

          <p className="product-description">
            {dummyCourse.courseDescription
              .replace(/<[^>]*>/g, "")
              .slice(0, 100)}
            ...
          </p>

          <div className="product-bottom">

            <span className="product-price">
              ${dummyCourse.coursePrice}
            </span>

            <span className="product-discount">
              {dummyCourse.discount}% OFF
            </span>

          </div>

        </div>

      </Link>

    </div>
  );
};

export default ProductItem;
