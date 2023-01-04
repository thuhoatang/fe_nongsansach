import React from "react";
import "./SlideProduct.css";
import rau from "../../asset/img/quacam.png";
import bobo from "../../asset/img/bobo.png";

const SlideProduct = ({ medias = [] }) => {
  const rederSlice = medias.map(
    (item) => (
      <div key={item.id}>
        <img src={item.url} alt='' />
      </div>))
  return (
    <>
      <div className="silde-product">
        <div className="product-detail-left text-center">
          {rederSlice}
        </div>
        <div className="product-detail-right text-center">
          <img src={medias[0]?.url} />
        </div>

        <div className="star-product text-center">
          <b>4.5</b>
          <iconify-icon
            icon="ic:round-star-rate"
            style={{
              fontSize: "40px",
              position: "relative",
              top: "10px",
              marginRight: "10px",
              color: "#ffbf00",
              left: "20px",
            }}
          ></iconify-icon>
        </div>
      </div>
    </>
  );
};

export default SlideProduct;
