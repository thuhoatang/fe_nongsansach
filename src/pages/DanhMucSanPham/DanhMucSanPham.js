import React from "react";
import FilterCategoryLeft from "../../components/FilterCategoryLeft/FilterCategoryLeft";
import "./DanhMucSanPham.css";
import CardProduct from "../../components/CardProduct/CardProduct";
import Pagination from "../../components/Pagination/Pagination";

const DanhMucSanPham = () => {
  return (
    <div className="category d-flex justify-content-between">
      <div className="category-"></div>
      <div className="left-category">
        <FilterCategoryLeft />
      </div>
      <div className="body-category">
        <div className="header d-flex justify-content-between">
          <p className="title-body-category">Rau các loại</p>
          <select className="sort-product">
            <option>Sắp xếp theo:</option>
            <option>dqwud</option>
            <option>dqwud</option>
            <option>dqwud</option>
          </select>
        </div>
        <div className="bar-header"></div>
        <div className="list-product">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>

        <Pagination />
      </div>
    </div>
  );
};

export default DanhMucSanPham;
