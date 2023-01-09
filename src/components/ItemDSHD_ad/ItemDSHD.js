import React from "react";
import { Link } from "react-router-dom";

const ItemDSHD = ({ color, values }) => {
  const date = new Date(values.created_at);
  return (
    <div className="item-dshd d-flex justify-content-between my-3" style={values.status.id === 1 ? { backgroundColor: '#D1ECF1' } : null}>
      <div className="left">
        <p>
          ĐƠN HÀNG: <span>#{values.id}</span>
        </p>
        <p>{values.name}</p>
        <p>{values.address}</p>
      </div>
      <div className="right">
        <p className="thoi-gian">{`${date.getHours()}: ${date.getMinutes()} ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}</p>
        <p>{new Intl.NumberFormat().format(values.total).replaceAll(",", " ")} đ</p>
        <p>
          <Link to={"/quan-tri-vien/hoa-don-khach/" + values.id}>Xem chi tiết</Link>
        </p>
      </div>
    </div>
  );
};

export default ItemDSHD;
