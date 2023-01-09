import React, { useEffect, useState } from "react";
import "./OrderDetail.css";
import ItemProductThanhToan from "../ItemProductThanhToan/ItemProductThanhToan";
import { Link, useParams } from "react-router-dom";
import { getInvoiceSpecified } from "../../service/paymentService";
import { changeStatusSpinner } from "../../actions/spinnerActtion";
import { connect } from "react-redux";
import { displayNoticationAction } from "../../actions/notficationAction";
const OrderDetail = ({ setInvoice = () => { }, invoice = {}, changeStatusSpinner, displayNoticationAction }) => {
  const { id } = useParams();
  const [info, setInfo] = useState(invoice);
  const [invoiceItems, setInvoiceItems] = useState([]);
  const date = new Date(info.created_at);
  useEffect(() => {
    const getData = async () => {
      changeStatusSpinner(true)
      const { invoice_items, ...info } = await getInvoiceSpecified(id);
      setInfo(info);
      setInvoice(info);
      setInvoiceItems(invoice_items.map((item) => {
        item.product.price = item.price
        return item;
      }));
      changeStatusSpinner(false)

    }
    getData();
  }, [invoice.status_id])

  return (
    <div className="order-detail">
      <div className="d-flex justify-content-between">
        <p className="title">
          CHI TIẾT ĐƠN HÀNG <span>#{info.id} </span>
        </p>

        <p>
          Ngày tạo: <span>{`${date.getHours()}: ${date.getMinutes()} ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</span>
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
        <div className="dia-chi bg-white">
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

        <div className="tong-thanh-toan bg-white">
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

export default connect(null, { changeStatusSpinner, displayNoticationAction })(OrderDetail);
