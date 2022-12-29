import React, { useState } from "react";
import { categories } from "../../constants/string";
import CardProduct from "../CardProduct/CardProduct";
import Pagination from "../Pagination/Pagination";
import "./TabProduct.css";

const TabProduct = ({ srcImg, namePro, pricePro }) => {
  const [btnChecked, setBtnChecked] = useState(1);
  const renderCategory = categories.map((item, index) => {
    return (
      <button
        className={`sub-nav-tab ${btnChecked == item.id ? "active" : ""}`}
        key={item.id}
        onClick={() => setBtnChecked(item.id)}
      >
        {item.name}
      </button>
    );
  });
  return (
    <div className="tab-product text-center">
      <div className="tab-header">
        <h3>Sản phẩm</h3>
        <div className="nav-tab">{renderCategory}</div>
      </div>
      <div className="tab-listProduct container">
        <div className="aaa row row-cols-1 row-cols-md-2">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>

      <Pagination />
    </div>
  );
};

export default TabProduct;
