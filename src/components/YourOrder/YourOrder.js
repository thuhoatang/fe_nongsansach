import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getInvoices } from "../../service/paymentService";
import "./YourOrder.css";

const YourOrder = () => {
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    const getData = async () => {
      const dataInvoices = await getInvoices();
      console.log(dataInvoices);
      setInvoices(dataInvoices);
    }
    getData();
  }, []);

  const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} `;
  }
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

        {invoices.map((item) => (
          <tr>
            <td>
              <Link to={'/ca-nhan/don-hang/' + item.id}>#{item.id}</Link>
            </td>
            <td>{formatDate(new Date(item.created_at))}</td>
            <td>{item.address}</td>
            <td> {new Intl.NumberFormat().format(item.total).replaceAll(",", " ")} đ</td>
            <td className="trangThai">{item.status.name}</td>
          </tr>
        ))}

      </table>
    </div>
  );
};

export default YourOrder;
