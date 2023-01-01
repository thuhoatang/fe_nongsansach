import React from "react";
import "./ItemProductThanhToan.css";
import traicay from "../../asset/img/quacam.png";

const ItemProductThanhToan = ({ values }) => {
  return (
    <div className="product   d-flex">
      <div className="product-header  d-flex">
        <div className="product-img text-center">
          <img src={values.product?.medias?.[0]?.url ?? traicay} />
        </div>
        <div>
          <p className="product-name">{values.product.name}</p>
          <p>
            <b>Số lượng: </b> <span>{values.quantity} kg</span>
          </p>
        </div>
      </div>

      <div className="product-footer text-right">
        <p>          {new Intl.NumberFormat().format(values.quantity * values.product.price).replaceAll(",", " ")}{" "}đ</p>
      </div>
    </div>
  );
};

export default ItemProductThanhToan;
