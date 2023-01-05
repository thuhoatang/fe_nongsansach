import React, { useEffect, useState } from "react";
import "./OrderDetail.css";
import ItemProductThanhToan from "../ItemProductThanhToan/ItemProductThanhToan";
import { Link, useParams } from "react-router-dom";
import { getInvoiceSpecified } from "../../service/paymentService";
const OrderDetail = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});
  const [invoiceItems, setInvoiceItems] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { invoice_items, ...info } = await getInvoiceSpecified(id);
      setInfo(info);
      setInvoiceItems(invoice_items.map((item) => {
        item.product.price = item.price
        return item;
      }));

      console.log(invoice_items, info);
    }
    getData();
  }, [])

  return (
    <div className="order-detail">
      <div className="d-flex justify-content-between">
        <p className="title">
          CHI TIẾT ĐƠN HÀNG <span>#{info.id} </span>
        </p>

        <p>
          Ngày tạo: <span>{info.created_at}</span>
        </p>
      </div>
      <div className="d-flex justify-content-between">
        <p>
          Trạng thái thanh toán: <b className="trangThai">{info.status?.name}</b>
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
          {invoiceItems.map((item) =>
            <tr>
              <td>
                <ItemProductThanhToan
                  values={item}
                />
              </td>

              <td className="trangThai text-center">{info.status.id == 4 ? (item.reviewed == 1 ? <Link to={`/san-pham/${item.product.id}?invoice_item_id=${item.invoice_item_id}`}>Đã đánh giá</Link> : <Link to={`/san-pham/${item.product.id}?invoice_item_id=${item.invoice_item_id}`}>Chưa được đánh giá</Link>) : <p>Bạn chưa thể đánh giá</p>}

              </td>
            </tr>)}

        </table>
      </div>

      <div className="info-user d-flex">
        <div className="dia-chi">
          <p>
            {" "}
            Họ và tên: <span>{info.name}</span>
          </p>
          <p>
            Địa chỉ: <span>{info.address}</span>
          </p>
          <p>
            Số điện thoại: <span>{info.phone}</span>
          </p>
        </div>

        <div className="tong-thanh-toan">
          <p>
            {" "}
            Phí vận chuyển: <span> {new Intl.NumberFormat()
              .format(info.transport_fee)
              .replaceAll(",", " ")} đ</span>
          </p>
          <p>
            Tổng tiền: <span className="text-danger">{new Intl.NumberFormat()
              .format(info.total)
              .replaceAll(",", " ")} đ</span>
          </p>
        </div>
      </div>
    </div >
  );
};

export default OrderDetail;
