import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
            Xin chào, <span>{props.auth?.name}</span> !
          </p>

          <div className="menu-info">
            <p>
              <a href="#" className="title-info">
                Thông tin tài khoản
              </a>
            </p>

            <p>
              <Link to='/ca-nhan/don-hang' className="title-info">
                Đơn hàng của bạn
              </Link>
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
const mapstateToProps = (state) => {
  return {
    auth: state.auth

  };
};
export default connect(mapstateToProps, {})(PersonalMaster)
