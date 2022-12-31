import React from "react";
import "./FilterCategoryLeft.css";
import sao1 from "../../asset/img/1sao.png";
import sao2 from "../../asset/img/2sao.png";
import sao3 from "../../asset/img/3sao.png";
import sao4 from "../../asset/img/4sao.png";
import sao5 from "../../asset/img/5sao.png";
import banner from "../../asset/img/banner-4.png";
import bannerFooter from "../../asset/img/footer-banner.png";

const FilterCategoryLeft = () => {
  return (
    <div className="">
      <button className="submit-filter">Áp dụng</button>
      <div className="fisrt-left-category">
        <p>
          {" "}
          <b>Lọc giá sản phẩm</b>
        </p>
        <input className="inputText1" placeholder="1 000 000 VND" />
        <iconify-icon
          icon="pajamas:dash"
          style={{ position: "relative", top: "3px", margin: "0px 2px" }}
        ></iconify-icon>
        <input className="inputText2" placeholder="12 000 000 VND" />
        <p>
          Giá: Từ <span>300.000 vnd</span> đến <span>4.000.000 vnd</span>
        </p>
      </div>

      <div className="second-left-category">
        <p>
          {" "}
          <b>Lọc theo sao</b>
        </p>

        <div className="list-iconStar">
          <div className="item-icon">
            <input className="checkbox" type="checkbox" />
            <img src={sao1} />
          </div>

          <div className="item-icon">
            <input className="checkbox" type="checkbox" />
            <img src={sao2} />
          </div>

          <div className="item-icon">
            <input className="checkbox" type="checkbox" />
            <img src={sao3} />
          </div>

          <div className="item-icon">
            <input className="checkbox" type="checkbox" />
            <img src={sao4} />
          </div>

          <div className="item-icon">
            <input className="checkbox" type="checkbox" />
            <img src={sao5} />
          </div>
        </div>
      </div>

      <div className="img-banner">
        <img src={banner} />
        <img src={bannerFooter} />
      </div>
    </div>
  );
};

export default FilterCategoryLeft;
