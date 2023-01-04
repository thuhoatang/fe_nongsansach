import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentProduct from "../../components/CommentProduct/CommentProduct";
import DetailProduct from "../../components/DetailProduct/DetailProduct";
import SlideProduct from "../../components/SlideProduct/SlideProduct";
import { getProductSpecified } from "../../service/productService";
import { getReviewByProduct } from "../../service/reviewService";

const ProductsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState({ items: [], ratings: {}, pages: 1 });

  useEffect(() => {
    const getData = async () => {
      const data = await getProductSpecified(id);
      setProduct(data.product)
      setReviews({ ...reviews, items: data.reviews, ratings: data.ratings, pages: data.pages })
    }
    getData();
  }, []);



  return (
    <>
      <div className="container my-5 d-flex justify-content-between">
        <SlideProduct medias={product.medias} />

        <DetailProduct product={product} />
      </div>

      <div className="container">
        <CommentProduct reviews={reviews} setReviews={setReviews} product_id={id} />
      </div>
    </>
  );
};

export default ProductsPage;
