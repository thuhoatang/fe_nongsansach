import React, { useState } from "react";
import "./ItemCart.css";
import rau from "../../asset/img/quacam.png";
const ItemCart = () => {
  const [quantity, setQuantity] = useState(10);

  const onClick = (number) => {
    setQuantity(quantity + number);
  };

  return (
    <div className="itemcart d-flex justify-content-around">
      <div className="img-product">
        <img src={rau} />
      </div>

      <div className="body-itemCart">
        <p className="name-product">Cà chua bi</p>
        <div>
          <p className="title-soLuong">Số lượng/Ký</p>
          <div className="body-soLuong d-flex text-center">
            <button
              className="btn-giam"
              onClick={() => {
                onClick(-1);
              }}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="btn-tang"
              onClick={() => {
                onClick(1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="footer-itemcart">
        <p className="price">10.000 đ</p>
        <button className="btn-xoa">Xóa</button>
      </div>
    </div>
  );
};

export default ItemCart;
