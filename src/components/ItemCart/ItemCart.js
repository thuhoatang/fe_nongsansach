import React, { useEffect, useState } from "react";
import "./ItemCart.css";
import rau from "../../asset/img/quacam.png";
import { connect } from "react-redux";
import { changeCartItemAction } from "../../actions/cartItemAction";
const ItemCart = ({ item, changeCartItemAction }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [idTimeOut, setIDTimeOut] = useState(item.quantity);

  const onClick = (number) => {
    setQuantity(number);
    clearTimeout(idTimeOut)
    setIDTimeOut(setTimeout(() => { console.log(123); changeCartItemAction(item.id, number); }, 400))
  };

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
                onClick(quantity - 1)
              }}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="btn-tang"
              onClick={() => {
                onClick(quantity + 1)
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="footer-itemcart">
        <p className="price">{new Intl.NumberFormat().format(quantity * item.product.price).replaceAll(',', ' ')} đ</p>
        <button className="btn-xoa" onClick={() => changeCartItemAction(item.id, 0)}>Xóa</button>
      </div>
    </div>
  );
};

export default connect(null, { changeCartItemAction })(ItemCart);
