import React from "react";
import "./Notification.css";
import icon from "../../asset/img/iconTB.png";

const Notification = () => {
  return (
    <div className="notification text-center">
      <div className="body">
        <p className="title">Thông báo</p>
        <img src={icon} />
        <p className="content">Bạn đã thêm vào giỏ hàng thành công!</p>

        <button className="btn-ok">OK</button>
      </div>
    </div>
  );
};

export default Notification;
