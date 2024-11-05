import React, { useEffect } from "react";
import FoodDisplay from "../FoodDisplay/FoodDisplay";
import "./AfterOrder.css";
import { useNavigate } from "react-router-dom";

const AfterOrder = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <>
      <div className="after-order">
        <div className="img-styling">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="green"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <h1>Thank you for your order!</h1>
        <p>Your order is on its way.</p>
      </div>
      <FoodDisplay category="All" />
    </>
  );
};

export default AfterOrder;
