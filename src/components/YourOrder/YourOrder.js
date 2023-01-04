import React from "react";
import "./YourOrder.css";

const YourOrder = () => {
  return (
    <div className="your-order text-center">
      <p className="title">ĐƠN HÀNG CỦA BẠN</p>
      <table>
        <tr>
          <th id="donHang">Đơn hàng</th>
          <th>Ngày</th>
          <th>Địa chỉ</th>
          <th>Giá trị đơn hàng</th>
          <th>TT thanh toán</th>
        </tr>
        <tr>
          <td>
            <a href="http://">#1980</a>
          </td>
          <td>21-12-2022</td>
          <td>45-Trần Hưng Đạo, Hải Châu, ĐN</td>
          <td>12.000.000 đ</td>
          <td className="trangThai">Chưa xác nhận</td>
        </tr>
      </table>
    </div>
  );
};

export default YourOrder;
