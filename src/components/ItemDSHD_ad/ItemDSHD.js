import React from "react";

const ItemDSHD = ({ color }) => {
  return (
    <div className="item-dshd d-flex justify-content-between my-3">
      <div className="left">
        <p>
          ĐƠN HÀNG: <span>#1234</span>
        </p>
        <p>Tăng Thị Thu Hòa</p>
        <p>23 Ông Ích Khiêm, Hải Châu, Đà Nẵng</p>
      </div>
      <div className="right">
        <p className="thoi-gian">11: 00 22-12-2023</p>
        <p>123.000 đ</p>
        <p>
          <a href="#">Xem chi tiết</a>
        </p>
      </div>
    </div>
  );
};

export default ItemDSHD;
