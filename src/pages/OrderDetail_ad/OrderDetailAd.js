import React, { useState } from "react";
import { connect } from "react-redux";
import { displayNoticationAction } from "../../actions/notficationAction";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import { chanStatusInvoice } from "../../service/invoicesServiceAdmin";
import "./OrderDetailAd.css";
const status = {
  1: 'Đang đợi xác nhận',
  2: 'Đang chuẩn bị',
  3: 'Đang được vận chuyển',
  4: 'Đã nhận được',
  5: 'Đã hủy'
}
const OrderDetailAd = ({ displayNoticationAction }) => {
  const [invoice, setInvoice] = useState({});


  const onChanggeSelect = (value) => {
    const postReq = async () => {
      const data = await chanStatusInvoice(invoice.id, { status_id: value });
      console.log(data);
      setInvoice({ ...invoice, status_id: +value, status: { name: "asdasd", id: value } })
      displayNoticationAction('Bạn đã thay đổi trạng thái đơn hàng thành công', 1000)
    }
    postReq();
  }
  return (
    <div className="order-detail">
      <OrderDetail setInvoice={setInvoice} invoice={invoice} />
      <div className="btn-action d-flex justify-content-end">
        <select value={invoice?.status?.id} onChange={(e) => onChanggeSelect(e.target.value)}>
          {Object.keys(status).map((key) => {

            return <option key={key} value={key}>{status[key]}</option>
          })}

          {/* <option value={1}>Đang đợi xác nhận</option>
          <option value={2}>Đang chuẩn bị</option>
          <option value={3}>ĐAng được vận chuyển</option>
          <option value={4}>Đã nhận được</option>
          <option value={5}>Đã Hủy</option> */}

        </select>
      </div>
    </div>
  );
};

export default connect(null, { displayNoticationAction })(OrderDetailAd);
