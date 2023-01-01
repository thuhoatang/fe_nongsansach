import React from "react";
import "./CardProduct.css";
import quacam from "../../asset/img/quacam.png";
import { connect } from "react-redux";
import { addCartItemAction } from "../../actions/cartItemAction";

const CardProduct = ({ product = { name: "#", price: 0 }, addCartItemAction }) => {
  return (
    <div className="card-product">
      <div className="product-thumbnail text-center">
        <img alt="" src={product?.medias?.[0]?.url ?? quacam} />
        <p className="title_hethang">Hết hàng</p>
      </div>

      <div className="product-info text-center my-4">
        <a href="#" className="title_product">
          {product.name}
        </a>
        <p className="price  my-2">
          {new Intl.NumberFormat().format(product.price).replaceAll(",", " ")}{" "}
          &#8363;
        </p>
      </div>

      {/* hidden hover */}
      <div className="product-action d-flex justify-content-evenly">
        <div className="icon icon_showproduct">
          <iconify-icon
            style={{ fontSize: "25px", color: "" }}
            icon="ph:eye"
          ></iconify-icon>
        </div>
        <a className="icon icon_tymproduct">
          <iconify-icon
            style={{ fontSize: "25px", color: "" }}
            icon="ph:heart"
          ></iconify-icon>
        </a>
        <div className="icon icon_cart" onClick={() => { addCartItemAction(product.id, 1) }}>
          <iconify-icon
            style={{ fontSize: "25px", color: "" }}
            icon="raphael:cart"
          ></iconify-icon>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addCartItemAction })(CardProduct);
