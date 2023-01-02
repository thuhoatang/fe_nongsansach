import React from "react";
import "../CommentProduct/CommentProduct.css";
import sao from "../../asset/img/2sao.png";
const ItemComment = () => {
  return (
    <div className="item  d-flex">
      <div className="avtar-rating">
        <img src="https://images.unsplash.com/photo-1672612114121-2e37d1b8996b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" />
      </div>
      <div className="info-avatar mx-3">
        <p className="name">vyvo_34</p>

        <img src={sao} />

        <p className="time">2022-12-27 00:45</p>

        <p className="description">
          Hàng đẹp mềm, giao nhanh. Mua ủng hộ thêm cho shop. Ảnh mang tc nhận
        </p>
      </div>
    </div>
  );
};

export default ItemComment;
