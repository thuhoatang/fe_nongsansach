import React from "react";
import CommentProduct from "../../components/CommentProduct/CommentProduct";
import DetailProduct from "../../components/DetailProduct/DetailProduct";
import SlideProduct from "../../components/SlideProduct/SlideProduct";

const ProductsPage = () => {
  return (
    <>
      <div className="container my-5 d-flex justify-content-between">
        <SlideProduct />

        <DetailProduct />
      </div>

      <div className="container">
        <CommentProduct />
      </div>
    </>
  );
};

export default ProductsPage;
