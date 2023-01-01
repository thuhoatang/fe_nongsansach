import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./MenuHeader.css";

const MenuHeader = ({ categories }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const renderCategory = categories.map((category) => (<Link className="btn_submenu" key={category.id} to={`/danh-muc/${category.id}`}>{category.name}</Link>));
  return (
    <>
      <div className="d-flex justify-content-around">
        <div className="tab_menu">
          <Link to={'/trang-chu'}>Trang chủ</Link>
        </div>

        <div className="tab_menu">
          <Link to={'#'}>Giới thiệu</Link>
        </div>

        <div
          className="tab_menu"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <Link to={'#'}>Sản phẩm</Link>
          {isHovering && (
            <div className="submenu_hover text-center">
              {renderCategory}
            </div>
          )}
        </div>

        <div className="tab_menu">
          <Link to={'#'}>Đặt hàng</Link>

        </div>

        <div className="tab_menu">
          <Link to={'#'}>Tin tức</Link>

        </div>

        <div className="tab_menu">
          <Link to={'#'}>Liên hệ</Link>


        </div>
      </div>
    </>
  );
};

const mapstateToProps = (state) => {
  return {
    categories: state.categories

  };
};
export default connect(mapstateToProps, {})(MenuHeader);
// export default MenuHeader;
