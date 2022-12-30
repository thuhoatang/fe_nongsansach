import React from "react";
import "./ThongTinNguoiNhan.css";

const ThongTinNguoiNhan = () => {
  return (
    <>
      <div className="header-thongtinnhanhang">
        <p>Thông tin nhận hàng</p>
      </div>

      <div className="body-thongtinnhanhang">
        <div className="div-input">
          <p>Email</p>
          <input
            className="input-thongtinnhanhang mb-2"
            placeholder="Nhập email"
          />
        </div>
        <div className="div-input">
          <p>Họ và tên</p>
          <input
            className="input-thongtinnhanhang mb-2"
            placeholder="Nhập họ và tên"
          />
        </div>
        <div className="div-input">
          <p>Số điện thoại</p>
          <input
            className="input-thongtinnhanhang mb-2"
            placeholder="Nhập số điện thoại"
          />
        </div>
        <div className="div-input">
          <p>Địa chỉ tùy chọn</p>
          <input
            className="input-thongtinnhanhang mb-2"
            placeholder="Nhập địa chỉ"
          />
        </div>
        <div className="div-input">
          <p>Chọn tỉnh/ thành phố</p>
          <select class="" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="div-input">
          <p>Chọn quận/ huyện</p>
          <select class="" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="div-input">
          <p>Chọn phường/ xã</p>
          <select class="" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ThongTinNguoiNhan;
