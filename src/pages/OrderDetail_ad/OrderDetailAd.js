import React from "react";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import "./OrderDetailAd.css";

const OrderDetailAd = () => {
  return (
    <div className="order-detail">
      <OrderDetail />
      <div className="btn-action d-flex justify-content-end">
        <select>
          <option>Xác nhận đơn hàng</option>
          <option>Hủy đơn hàng</option>
          <option>Hủy đơn hàng</option>
          <option>Hủy đơn hàng</option>
        </select>
      </div>
    </div>
  );
};

export default OrderDetailAd;
