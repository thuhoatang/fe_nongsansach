import React from "react";
import ItemComment from "../ItemComment/ItemComment";
import Pagination from "../Pagination/Pagination";
import YourComment from "../YourComment/YourComment";
import "./CommentProduct.css";
const CommentProduct = () => {
  return (
    <>
      <YourComment />
      <div className="comment">
        <p className="title-comment">Xem đánh giá khách hàng</p>
        <div className="rating-star text-left d-flex">
          <div className="rating-item">
            <p>1</p>
            <iconify-icon
              icon="ic:round-star-rate"
              style={{
                fontSize: "30px",
                height: "100%",
                position: "relative",
                top: "7px",
                color: "rgb(255, 251, 0)",
              }}
            ></iconify-icon>
            <p>(4)</p>
          </div>

          <div className="rating-item">
            <p>2</p>
            <iconify-icon
              icon="ic:round-star-rate"
              style={{
                fontSize: "30px",
                height: "100%",
                position: "relative",
                top: "7px",
                color: "rgb(255, 251, 0)",
              }}
            ></iconify-icon>
            <p>(4)</p>
          </div>

          <div className="rating-item">
            <p>3</p>
            <iconify-icon
              icon="ic:round-star-rate"
              style={{
                fontSize: "30px",
                height: "100%",
                position: "relative",
                top: "7px",
                color: "rgb(255, 251, 0)",
              }}
            ></iconify-icon>
            <p>(34)</p>
          </div>

          <div className="rating-item">
            <p>4</p>
            <iconify-icon
              icon="ic:round-star-rate"
              style={{
                fontSize: "30px",
                height: "100%",
                position: "relative",
                top: "7px",
                color: "rgb(255, 251, 0)",
              }}
            ></iconify-icon>
            <p>(4)</p>
          </div>

          <div className="rating-item">
            <p>5</p>
            <iconify-icon
              icon="ic:round-star-rate"
              style={{
                fontSize: "30px",
                height: "100%",
                position: "relative",
                top: "7px",
                color: "rgb(255, 251, 0)",
              }}
            ></iconify-icon>
            <p>(4)</p>
          </div>
        </div>

        <div className="list-comment">
          <ItemComment />
          <ItemComment />
          <ItemComment />
        </div>

        <Pagination />
      </div>
    </>
  );
};

export default CommentProduct;
