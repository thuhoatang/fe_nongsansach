import React, { Children } from "react";
import "./AdminDanhSachHoaDon.css";
import logo_img from "../../asset/img/logo_img.png";
import DanhSachHoaDon from "../../components/DanhSachHoaDon/DanhSachHoaDon";
const AdminDanhSachHoaDon = (props) => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div className="menu-left-admin">
          <div className="logo">
            <img src={logo_img} />
          </div>

          <div className="menu-list">
            <div className="menu-item d-flex align-items-center">
              <iconify-icon icon="eos-icons:products"></iconify-icon>
              <span>Quản lý sản phẩm</span>
            </div>
            <div className="menu-item d-flex align-items-center">
              <iconify-icon icon="icon-park-outline:bill"></iconify-icon>
              <span>Danh sách hóa đơn</span>
            </div>
            <div className="menu-item d-flex align-items-center">
              <iconify-icon icon="material-symbols:supervisor-account-outline-rounded"></iconify-icon>
              <span>Quản lý tài khoản</span>
            </div>
          </div>
        </div>
      </div>
      <div className="body-content">
        <div className="header-admin d-flex justify-content-end align-items-center">
          <div className="bell">
            <button className="btn-bell bg-white">
              <iconify-icon
                icon="fontisto:bell-alt"
                style={{
                  fontSize: "20px",
                  position: "relative",
                  top: "3px",
                  color: "green",
                }}
              ></iconify-icon>
            </button>

            <div className="lable-notification text-center">23</div>
          </div>
          <div className="avt-admin mx-3">
            <img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/f9/f96fea7bfd95cff6d07a38f579eef843c6d1739a_full.jpg" />
          </div>
        </div>

        <div className="body-content-right">
          The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
          <DanhSachHoaDon />
        </div>
      </div>
    </div>
  );
};

export default AdminDanhSachHoaDon;
