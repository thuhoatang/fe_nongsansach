import React, { useState } from "react";
import "./ItemCart.css";
import rau from "../../asset/img/quacam.png";
import { connect } from "react-redux";
import { changeCartItemAction } from "../../actions/cartItemAction";
const ItemCart = ({ item, changeCartItemAction }) => {
  // const [quantity, setQuantity] = useState(10);

  // const onClick = (number) => {
  //   setQuantity(quantity + number);
  // };
  return (
    <div className="itemcart d-flex justify-content-around">
      <div className="img-product">
        <img src={item.product.medias?.[0].url} />
      </div>

      <div className="body-itemCart">
        <p className="name-product">{item.product.name}</p>
        <div>
          <p className="title-soLuong">Số lượng/Ký</p>
          <div className="body-soLuong d-flex text-center">
            <button
              className="btn-giam"
              onClick={() => {
                changeCartItemAction(item.id, item.quantity - 1)
              }}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              className="btn-tang"
              onClick={() => {
                changeCartItemAction(item.id, item.quantity + 1)
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="footer-itemcart">
        <p className="price">{new Intl.NumberFormat().format(item.quantity * item.product.price).replaceAll(',', ' ')} đ</p>
        <button className="btn-xoa">Xóa</button>
      </div>
    </div>
  );
};

export default connect(null, { changeCartItemAction })(ItemCart);
