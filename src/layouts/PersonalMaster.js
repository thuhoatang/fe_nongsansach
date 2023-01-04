import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../pages/PersonalPage/PersonalPage.css";
const PersonalMaster = (props) => {
  return (
    <>
      <Header />
      <div className="d-flex container my-4">
        <div className="menu-left">
          <b className="title">Trang tài khoản</b>
          <p>
            Xin chào, <span>Tăng Thị Thu Hòa</span> !
          </p>

          <div className="menu-info">
            <p>
              <a href="#" className="title-info">
                Thông tin tài khoản
              </a>
            </p>

            <p>
              <a href="#" className="title-info">
                Đơn hàng của bạn
              </a>
            </p>
            <p>
              <a href="#" className="title-info">
                Đổi mật khẩu
              </a>
            </p>
            <p>
              <a href="#" className="title-info">
                Thông tin tài khoản
              </a>
            </p>
            <p>
              <a href="#" className="title-info">
                Sổ địa chỉ
              </a>
            </p>
          </div>
        </div>
        <div className="content-right">{props.children}</div>
      </div>
      <Footer />
    </>
  );
};

export default PersonalMaster;
