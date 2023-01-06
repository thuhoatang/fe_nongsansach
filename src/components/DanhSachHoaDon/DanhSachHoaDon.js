import React from "react";
import ItemDSHD from "../ItemDSHD_ad/ItemDSHD";
import "./DanhSachHoaDon.css";

const DanhSachHoaDon = () => {
  return (
    <div className="danh-sach-hd">
      <p className="mx-5 text-danger">DANH SÁCH HÓA ĐƠN</p>
      <div className="list-dshd ">
        <ItemDSHD />
        <ItemDSHD />
        <ItemDSHD />
      </div>
    </div>
  );
};

export default DanhSachHoaDon;
