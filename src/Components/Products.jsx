
import React from "react";
import { dummyCourses } from "../assets/assets";
import ProductItem from "../Components/ProductItem";
import "./Products.css";

const Products = () => {
  return (
    <div className="products-page">

      <div className="products-header">
        <h1>Explore Our Courses</h1>

        <p>
          Learn new skills with practical courses designed
          for beginners and developers.
        </p>
      </div>

      <div className="products-grid">

        {dummyCourses.map((course) => (
          <ProductItem
            key={course._id}
            dummyCourse={course}
          />
        ))}

      </div>

    </div>
  );
};

export default Products;
