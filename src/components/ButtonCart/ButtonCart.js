import React, { useState } from "react";
import { connect } from "react-redux";
import { expandedCartAction } from "../../actions/cartItemAction";
import Cart from "../Cart/Cart";
import "./ButtonCart.css";

const ButtonCart = ({ cart, expandedCartAction }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div>
        <button
          onClick={() => expandedCartAction()}
          className="btn_icon_cart mx-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <iconify-icon
            style={{ fontSize: "25px", color: "white" }}
            icon="clarity:shopping-cart-line"
          ></iconify-icon>
        </button>

        <div className="count_notification text-center">{cart.amount}</div>
      </div>

      {cart.expanded ? <Cart items={cart.items} setClicked={setClicked} /> : ""}
    </>
  );
};

const mapstateToProps = (state) => {
  return {
    cart: state.cart
  };
};
export default connect(mapstateToProps, { expandedCartAction })(ButtonCart);
