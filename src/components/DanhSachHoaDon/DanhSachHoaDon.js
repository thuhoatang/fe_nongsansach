import React, { useEffect, useState } from "react";
import { getInvoicesAdmin } from "../../service/invoicesServiceAdmin";
import ItemDSHD from "../ItemDSHD_ad/ItemDSHD";
import "./DanhSachHoaDon.css";

const DanhSachHoaDon = () => {
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const invoices = await getInvoicesAdmin();
      setInvoices(invoices);
    }
    getData()
  }, [])
  return (
    <div className="danh-sach-hd">
      <p className="mx-5 text-danger">DANH SÁCH HÓA ĐƠN</p>
      <div className="list-dshd ">
        {invoices.map((item) => {
          return <ItemDSHD key={item.id} values={item} />
        })}
      </div>
    </div>
  );
};

export default DanhSachHoaDon;
