import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ButtonAccount.css";

const ButtonAccount = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <div>
          <button className="btn_icon_acc mx-2">
            <iconify-icon
              style={{ fontSize: "30px", color: "white" }}
              icon="mdi-light:account"
            ></iconify-icon>
          </button>
        </div>

        {isHovering && (
          <div className="btn_acc_hover text-center">
            <a className="btn_account" href="#">
              Đăng nhập
            </a>
            <a className="btn_account" href="#">
              Đăng ký
            </a>
            <a className="btn_account" href="#">
              Đăng nhập
            </a>
            {/* <Link to="dư">đ</Link> */}
          </div>
        )}
      </div>
    </>
  );
};

export default ButtonAccount;
