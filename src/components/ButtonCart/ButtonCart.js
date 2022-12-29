import React from "react";
import "./ButtonCart.css";

const ButtonCart = () => {
  return (
    <>
      <div>
        <button className="btn_icon_cart mx-2">
          <iconify-icon
            style={{ fontSize: "25px", color: "white" }}
            icon="clarity:shopping-cart-line"
          ></iconify-icon>
        </button>

        <div className="count_notification text-center">20</div>
      </div>
    </>
  );
};

export default ButtonCart;
