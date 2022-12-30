import React, { useEffect, useState } from "react";
import "./TopProduct.css";
import CardProduct from "../CardProduct/CardProduct";
import { searchProduct } from "../../service/searchService";

const TopProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await searchProduct({ limit: 4, orderBy: 'sold' });
      setProducts(data.products);
    }
    fetchData();
  }, []);
  const rederProducts = products.map((product) => (<CardProduct key={product.id} product={product} />))

  return (
    <>
      <div className="top-product d-flex justify-content-center">
        <div className="header-top-product">Sản phẩm bán chạy</div>
        <div className="d-flex">
          {rederProducts}
        </div>
      </div>
    </>
  );
};

export default TopProduct;
