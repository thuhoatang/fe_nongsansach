import React from "react";
import "./TopProduct.css";
import CardProduct from "../CardProduct/CardProduct";

const TopProduct = () => {
  return (
    <>
      <div className="top-product d-flex justify-content-center">
        <div className="header-top-product">Sản phẩm bán chạy</div>
        <div className="d-flex justify-content-evenly">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </>
  );
};

export default TopProduct;
