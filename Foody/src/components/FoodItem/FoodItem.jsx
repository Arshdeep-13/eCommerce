import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url, token } =
    useContext(StoreContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button
        onClick={handleModalToggle}
        className="food-item hover:translate-x-2 hover:translate-y-2"
        type="button"
      >
        <div className="food-item-img-container">
          <img
            className="food-item-img"
            src={url + "/images/" + image}
            alt=""
          />
          {!cartItems[id] ? (
            <img
              className="add"
              onClick={() => {
                if (token) {
                  addToCart(id);
                } else {
                  alert("Please login to add items to cart");
                }
              }}
              src={assets.add_icon_white}
              alt="Add to cart"
            />
          ) : (
            <div className="food-item-counter">
              <img
                onClick={() => {
                  if (token) {
                    removeFromCart(id);
                  } else {
                    alert("Please login to add items to cart");
                  }
                }}
                src={assets.remove_icon_red}
                alt="Remove from cart"
              />
              <p>{cartItems[id]}</p>
              <img
                onClick={() => {
                  if (token) {
                    addToCart(id);
                  } else {
                    alert("Please login to add items to cart");
                  }
                }}
                src={assets.add_icon_green}
                alt="Add to cart"
              />
            </div>
          )}
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="Rating" />
          </div>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </button>

      {isModalOpen && (
        <div
          id="default-modal"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="flex bg-black rounded-lg text-white">
            <div className="food-item-img-container">
              <img
                className="food-item-img"
                src={url + "/images/" + image}
                alt=""
              />
              {!cartItems[id] ? (
                <img
                  className="add"
                  onClick={() => {
                    if (token) {
                      addToCart(id);
                    } else {
                      alert("Please login to add items to cart");
                    }
                  }}
                  src={assets.add_icon_white}
                  alt="Add to cart"
                />
              ) : (
                <div className="food-item-counter">
                  <img
                    onClick={() => {
                      if (token) {
                        removeFromCart(id);
                      } else {
                        alert("Please login to add items to cart");
                      }
                    }}
                    src={assets.remove_icon_red}
                    alt="Remove from cart"
                  />
                  <p className="text-black">{cartItems[id]}</p>
                  <img
                    onClick={() => {
                      if (token) {
                        addToCart(id);
                      } else {
                        alert("Please login to add items to cart");
                      }
                    }}
                    src={assets.add_icon_green}
                    alt="Add to cart"
                  />
                </div>
              )}
            </div>
            <div className="food-item-info pt-10 relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-red-600 px-2.5 py-1 rounded-full absolute right-0 top-0"
              >
                X
              </button>
              <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="Rating" />
              </div>
              <p className="food-item-desc">{description}</p>
              <p className="food-item-price">${price}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodItem;
