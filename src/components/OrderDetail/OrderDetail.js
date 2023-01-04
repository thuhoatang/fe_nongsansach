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

      <div className="">
        <div className="dia-chi">
          <p>
            {" "}
            <b>Tăng Thị Thu Hòa</b>
          </p>
          <p>
            Địa chỉ: <span>dabc, Thanh Sơn, Đà Nẵng</span>
          </p>
          <p>
            Số điện thoại: <span>09 81274 7347</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
