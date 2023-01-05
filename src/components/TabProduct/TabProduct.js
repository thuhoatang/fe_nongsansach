import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { searchProduct } from "../../service/searchService";
import CardProduct from "../CardProduct/CardProduct";
import Pagination from "../Pagination/Pagination";
import "./TabProduct.css";

const TabProduct = ({ categories }) => {
  const [products, setProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(0);

  const [pagination, setPagination] = useState({ current: 1, pages: 0 });

  const renderCategory = [{ id: 0, name: "Tất cả" }, ...categories].map((item) => {
    return (
      <button
        className={`sub-nav-tab ${currentCategory === item.id ? "active" : ""}`}
        key={item.id}
        onClick={() => onClickCategory(item.id)}
      >
        {item.name}
      </button>
    );
  });

  useEffect(() => {
    const fetchData = async () => {
      let data;
      if (currentCategory === 0) {
        data = await searchProduct();
      } else {
        data = await searchProduct({ 'categories[]': currentCategory });
      }
      setPagination({ pages: data.pages, current: 1 })
      setProducts(data.products);
    }
    fetchData();
  }, [currentCategory]);

  useEffect(() => {
    const fetchData = async () => {
      let data;
      if (currentCategory === 0) {
        data = await searchProduct({ page: pagination.current });
      } else {
        data = await searchProduct({ 'categories[]': currentCategory, page: pagination.current });
      }
      setProducts(data.products);
    }


    fetchData();

  }, [pagination.current])


  const onClickCategory = (id) => {
    setCurrentCategory(id);
  }

  const onClickPagination = (page) => {
    setPagination({ ...pagination, current: page })
  }
  const rederProducts = products.map((product) => (<CardProduct key={product.id} product={product} />))

  return (
    <div className="tab-product text-center">
      <div className="tab-header">
        <h3>Sản phẩm</h3>
        <div className="nav-tab">{renderCategory}</div>
      </div>
      <div className="tab-listProduct container">
        <div className="aaa row row-cols-1 row-cols-md-2">
          {rederProducts}
        </div>
      </div>

      <Pagination pages={pagination.pages} current={pagination.current} onClickPagination={onClickPagination} />
    </div>
  );
};
const mapstateToProps = (state) => {
  return {
    categories: state.categories

  };
};
export default connect(mapstateToProps, {})(TabProduct);