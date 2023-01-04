import React from "react";
import "../CommentProduct/CommentProduct.css";
import sao1 from "../../asset/img/1sao.png";
import sao2 from "../../asset/img/2sao.png";
import sao3 from "../../asset/img/3sao.png";
import sao4 from "../../asset/img/4sao.png";
import sao5 from "../../asset/img/5sao.png";

const sao = {
  1: sao1,
  2: sao2,
  3: sao3,
  4: sao4,
  5: sao5,
}
const ItemComment = ({ values }) => {
  return (
    <div className="item  d-flex">
      <div className="avtar-rating">
        <img src="https://images.unsplash.com/photo-1672612114121-2e37d1b8996b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" />
      </div>
      <div className="info-avatar mx-3">
        <p className="name">{values.name}</p>

        <img src={sao[values.rating]} />

        <p className="time">{Date(values.created_at)}</p>

        <p className="description">
          {values.content}
        </p>
      </div>
    </div>
  );
};

export default ItemComment;
