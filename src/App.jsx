
import React from "react";

import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Product from "./Pages/Product";

import BuyCourse from "./Pages/BuyCourse";
import Cart from "./Pages/Cart";
import PlaceOrder from "./Pages/PlaceOrder";
import Orders from "./Pages/Orders";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import MyCourses from "./Pages/MyCourses";

import Educator from "./Pages/Educator";

import "./App.css";


const App = () => {

  return (
    <>

      <Navbar />

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* COURSES */}

        <Route
          path="/courses"
          element={<Courses />}
        />


        {/* COURSE DETAILS */}

        <Route
          path="/product/:id"
          element={<Product />}
        />


        {/* BUY COURSE */}

        <Route
          path="/buy-course"
          element={<BuyCourse />}
        />


        {/* CART */}

        <Route
          path="/cart"
          element={<Cart />}
        />


        {/* PLACE ORDER */}

        <Route
          path="/place-order"
          element={<PlaceOrder />}
        />


        {/* ORDERS */}

        <Route
          path="/orders"
          element={<Orders />}
        />


        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />


        {/* REGISTER */}

        <Route
          path="/register"
          element={<Register />}
        />


        {/* MY COURSES */}

        <Route
          path="/my-Courses"
          element={<MyCourses />}
        />


        {/* EDUCATOR */}

        <Route
          path="/educator"
          element={<Educator />}
        />

      </Routes>

    </>
  );
};


export default App;
