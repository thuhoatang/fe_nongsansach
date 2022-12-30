import React from "react";
import "./ItemProductThanhToan.css";
import traicay from "../../asset/img/quacam.png";

const ItemProductThanhToan = () => {
  return (
    <div className="product   d-flex">
      <div className="product-header  d-flex">
        <div className="product-img text-center">
          <img src={traicay} />
        </div>
        <div>
          <p className="product-name">Thịt heo</p>
          <p>
            <b>Số lượng: </b> <span>3 kg</span>
          </p>
        </div>
      </div>

      <div className="product-footer text-right">
        <p>1.800.000 đ</p>
      </div>
    </div>
  );
};

export default ItemProductThanhToan;
