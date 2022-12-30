import React, { useState } from "react";
import Cart from "../Cart/Cart";
import "./ButtonCart.css";

const ButtonCart = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div>
        <button
          onClick={() => setClicked(!clicked)}
          className="btn_icon_cart mx-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <iconify-icon
            style={{ fontSize: "25px", color: "white" }}
            icon="clarity:shopping-cart-line"
          ></iconify-icon>
        </button>

        <div className="count_notification text-center">20</div>
      </div>

      {clicked ? <Cart setClicked={setClicked} /> : ""}
    </>
  );
};

export default ButtonCart;
