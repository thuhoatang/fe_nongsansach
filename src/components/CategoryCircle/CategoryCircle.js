import React from "react";
import "./CategoryCircle.css";

const CategoryCircle = (props) => {
  return (
    <>
      <div className="">
        <div className="category_item text-center mx-4">
          <div className="category_item_img">
            <img src={props.src} />
            <div className="category_item_img_hidden">
              <span className="count_sp">6</span>
              <br />
              <span className="name_sp">sản phẩm</span>
            </div>
          </div>

          {/* title */}
          <a href="#" className="title_category">
            {props.nameSP}
          </a>
        </div>
      </div>
    </>
  );
};

export default CategoryCircle;
