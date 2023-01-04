import React, { useState } from "react";
import { connect } from "react-redux";
import { addCartItemAction } from "../../actions/cartItemAction";
import Readmore from "../Readmore/Readmore";
import "./DetailProduct.css";

const DetailProduct = ({ product, addCartItemAction }) => {
  const [amount, setAmount] = useState(1);
  const onClickChange = (number) => {
    if (number > 0) {
      setAmount(number)
    }
  }

  return (
    <div className="detail-product">
      <h3 className="product-name">{product.name}</h3>
      <div className="d-flex">
        <p className="product-brand">
          <b>Nhà sản xuất: </b>{product.producer}
        </p>
        <p className="product-brand mx-4">
          <b>Tình trạng: </b>Còn hàng
        </p>
      </div>

      {/* quantity */}
      <div className="product-quantity">
        <b>Số lượng</b>
        <div className="mt-2">
          <button onClick={() => onClickChange(amount - 1)}>-</button>
          <input value={amount} pattern="[1-9][0-9]*" onChange={(e) => {
            const str = e.target.value;
            var matches = str.match(/(\d+)/);
            setAmount(+matches[0] >= 0 ? +matches[0] : amount)
          }} />
          <button onClick={() => onClickChange(amount + 1)}>+</button>

          <span className="product-price mx-5 pt-3"> {new Intl.NumberFormat().format(product.price).replaceAll(",", " ")} đ</span>
        </div>
      </div>

      {/* mo ta san pham */}
      <div className="product-description">
        <b>Mô tả sản phẩm</b>
        <div className="content">
          <p>
            <Readmore>{product.description ?? " Ipsum is simply dummy text of the printing and typesetting"}

            </Readmore>
          </p>
        </div>
      </div>

      <div className="btn-addToCart">
        <button onClick={() => { addCartItemAction(product.id, amount) }}>
          <iconify-icon
            icon="ps:shopping-cart"
            style={{
              fontSize: "30px",
              position: "relative",
              top: "3px",
              marginRight: "10px",
            }}
          ></iconify-icon>
          CHO VÀO GIỎ HÀNG
        </button>
      </div>
    </div>
  );
};
export default connect(null, { addCartItemAction })(DetailProduct);

