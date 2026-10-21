
import React, {
  createContext,
  useEffect,
  useState,
} from "react";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {

  // =========================
  // CART
  // =========================

  const [cartItems, setCartItems] = useState(() => {

    const savedCart = localStorage.getItem("lmsCart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });


  // =========================
  // ORDERS
  // =========================

  const [orders, setOrders] = useState(() => {

    const savedOrders =
      localStorage.getItem("lmsOrders");

    return savedOrders
      ? JSON.parse(savedOrders)
      : [];
  });


  // =========================
  // SAVE CART
  // =========================

  useEffect(() => {

    localStorage.setItem(
      "lmsCart",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);


  // =========================
  // SAVE ORDERS
  // =========================

  useEffect(() => {

    localStorage.setItem(
      "lmsOrders",
      JSON.stringify(orders)
    );

  }, [orders]);


  // =========================
  // CALCULATE FINAL PRICE
  // =========================

  const calculateFinalPrice = (course) => {

    const price = Number(course.coursePrice) || 0;

    const discount = Number(course.discount) || 0;

    return price - (price * discount) / 100;
  };


  // =========================
  // ADD TO CART
  // =========================

  const addToCart = (course) => {

    const alreadyAdded = cartItems.some(
      (item) => item._id === course._id
    );

    if (alreadyAdded) {
      return false;
    }

    const finalPrice =
      calculateFinalPrice(course);

    const courseWithPrice = {
      ...course,
      finalPrice,
    };

    setCartItems((prev) => [
      ...prev,
      courseWithPrice,
    ]);

    return true;
  };


  // =========================
  // REMOVE FROM CART
  // =========================

  const removeFromCart = (courseId) => {

    setCartItems((prev) =>
      prev.filter(
        (item) => item._id !== courseId
      )
    );
  };


  // =========================
  // CLEAR CART
  // =========================

  const clearCart = () => {
    setCartItems([]);
  };


  // =========================
  // CART COUNT
  // =========================

  const getCartCount = () => {

    return cartItems.length;
  };


  // =========================
  // CART TOTAL
  // =========================

  const getCartAmount = () => {

    return cartItems.reduce(
      (total, course) => {

        const price =
          Number(course.finalPrice) || 0;

        return total + price;

      },
      0
    );
  };


  // =========================
  // ADD ORDER
  // =========================

  const addOrder = (orderData) => {

    const newOrder = {
      id:
        orderData.id ||
        `LMS-${Date.now()}`,

      items: orderData.items || [],

      amount:
        Number(orderData.amount) || 0,

      payment:
        orderData.payment ?? false,

      paymentMethod:
        orderData.paymentMethod || "RAZORPAY",

      status:
        orderData.status ||
        "Payment Pending",

      date:
        orderData.date ||
        new Date().toLocaleDateString(),

      createdAt:
        new Date().toISOString(),
    };

    setOrders((prev) => [
      newOrder,
      ...prev,
    ]);

    return newOrder;
  };


  // =========================
  // CONTEXT VALUE
  // =========================

  const value = {

    // cart
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartCount,
    getCartAmount,

    // orders
    orders,
    addOrder,

    // helper
    calculateFinalPrice,
  };


  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
