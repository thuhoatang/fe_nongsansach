import React, { useState } from "react";
import "./MenuHeader.css";

const MenuHeader = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
      <div className="d-flex justify-content-around">
        <div className="tab_menu">
          <a href="#">Trang chủ</a>
        </div>

        <div className="tab_menu">
          <a href="#">Giới thiệu</a>
        </div>

        <div
          className="tab_menu"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <a href="#">Sản phẩm</a>

          {isHovering && (
            <div className="submenu_hover text-center">
              <a className="btn_submenu" href="#">
                Rau các loại
              </a>
              <a className="btn_submenu" href="#">
                Củ các loại
              </a>
              <a className="btn_submenu" href="#">
                Trái cây loại
              </a>
              <a className="btn_submenu" href="#">
                Thịt các loại
              </a>
              <a className="btn_submenu" href="#">
                Cá các loại
              </a>
            </div>
          )}
        </div>

        <div className="tab_menu">
          <a href="#">Đặt hàng</a>
        </div>

        <div className="tab_menu">
          <a href="#">Tin tức</a>
        </div>

        <div className="tab_menu">
          <a href="#">Liên hệ</a>
        </div>
      </div>
    </>
  );
};

export default MenuHeader;
