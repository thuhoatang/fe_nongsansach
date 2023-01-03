import React from "react";
import Readmore from "../Readmore/Readmore";
import "./DetailProduct.css";

const DetailProduct = () => {
  return (
    <div className="detail-product">
      <h3 className="product-name">Ngũ cỗc</h3>
      <div className="d-flex">
        <p className="product-brand">
          <b>Nhà sản xuất: </b>Farmer NONGDAN
        </p>
        <p className="product-brand mx-4">
          <b>Tình trạng: </b>Còn hàng
        </p>
      </div>

      {/* quantity */}
      <div className="product-quantity">
        <b>Số lượng</b>
        <div className="mt-2">
          <button>-</button>
          <input />
          <button>+</button>

          <span className="product-price mx-5 pt-3">120.000 đ</span>
        </div>
      </div>

      {/* mo ta san pham */}
      <div className="product-description">
        <b>Mô tả sản phẩm</b>
        <div className="content">
          <p>
            <Readmore>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </Readmore>
          </p>
        </div>
      </div>

      <div className="btn-addToCart">
        <button>
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

export default DetailProduct;
