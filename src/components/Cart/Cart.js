import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { expandedCartAction } from "../../actions/cartItemAction";
import ItemCart from "../ItemCart/ItemCart";
import "./Cart.css";


const Cart = ({ setClicked, items, expandedCartAction }) => {

  const navigate = useNavigate();

  let total = 0;
  const render = items.map((item) => {
    total += item.quantity * item.product.price;

    return < ItemCart key={item.id} item={item} />
  })


  return (
    <div className="bundle-cart" onClick={() => expandedCartAction(false)}>
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
            onClick={() => expandedCartAction(false)}
          >
            <iconify-icon icon="iwwa:delete"></iconify-icon>
          </button>
        </div>

        <div className="body-cart">
          <div class="ex3">
            {render}
          </div>
        </div>

        <div className="giaTien d-flex  justify-content-between mx-3 mt-2">
          <p>
            <b>Tổng tiền:</b>
          </p>
          <p className="tongtien">{new Intl.NumberFormat().format(total).replaceAll(',', ' ')} đ</p>
        </div>

        <div className="footer-cart text-center">
          <button onClick={() => navigate('/thanh-toan')} className="btn_thanhToan">Thanh toán</button>
        </div>
      </div>
    </div>
  );
};
const mapstateToProps = (state) => {
  return {
    cart: state.cart
  };
};
export default connect(mapstateToProps, { expandedCartAction })(Cart);
