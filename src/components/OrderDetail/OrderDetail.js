import React from "react";
import "./OrderDetail.css";
import ItemProductThanhToan from "../ItemProductThanhToan/ItemProductThanhToan";
const OrderDetail = () => {
  return (
    <div className="order-detail">
      <div className="d-flex justify-content-between">
        <p className="title">
          CHI TIẾT ĐƠN HÀNG <span>#1234 </span>
        </p>

        <p>
          Ngày tạo: <span>12-22-2022</span>
        </p>
      </div>
      <div className="d-flex justify-content-between">
        <p>
          Trạng thái thanh toán: <b className="trangThai">Chưa thanh toán</b>
        </p>
        <p>
          Trạng thái vận chuyển: <b>Chưa chuyển</b>
        </p>
      </div>

      <div className="list-product">
        <table>
          <tr>
            <th id="donHang">Sản phẩm</th>

            <th>Hành động</th>
          </tr>
          <tr>
            <td>
              <ItemProductThanhToan
                values={{
                  product: { name: "Bưởi da cá", price: 235000 },
                  quantity: 3,
                }}
              />
            </td>

            <td className="trangThai text-center">
              <a href="#">Chưa được đánh giá</a>
            </td>
          </tr>
        </table>
      </div>

      <div className="info-user d-flex">
        <div className="dia-chi">
          <p>
            {" "}
            Họ và tên: <span>Tăng Thị Thu Hòa</span>
          </p>
          <p>
            Địa chỉ: <span>dabc, Thanh Sơn, Đà Nẵng</span>
          </p>
          <p>
            Số điện thoại: <span>09 81274 7347</span>
          </p>
        </div>

        <div className="tong-thanh-toan">
          <p>
            {" "}
            Phí vận chuyển: <span>40.000 đ</span>
          </p>
          <p>
            Tổng tiền: <span className="text-danger">234 000 đ</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
