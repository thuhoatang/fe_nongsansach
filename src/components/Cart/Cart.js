import React from "react";
import ItemCart from "../ItemCart/ItemCart";
import "./Cart.css";

const Cart = ({ setClicked }) => {
  return (
    <div className="bundle-cart" onClick={() => setClicked(false)}>
      <div
        className="cart"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="header-cart d-flex  justify-content-between">
          {" "}
          <h5>GIỎ HÀNG</h5>
          <button
            className="icon-exit border-0"
            onClick={() => setClicked(false)}
          >
            <iconify-icon icon="iwwa:delete"></iconify-icon>
          </button>
        </div>

        <div className="body-cart">
          <div class="ex3">
            <ItemCart />
            <ItemCart />
            <ItemCart />
            <ItemCart />
            <ItemCart />
            <ItemCart />
            <ItemCart />
            <ItemCart />
          </div>
        </div>

        <div className="giaTien d-flex  justify-content-between mx-3 mt-2">
          <p>
            <b>Tổng tiền:</b>
          </p>
          <p className="tongtien">45.000.000 đ</p>
        </div>

        <div className="footer-cart text-center">
          <button className="btn_thanhToan">Thanh toán</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
