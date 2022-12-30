import React from "react";
import "./ThanhToan.css";
import ThongTinNguoiNhan from "../ThongTinNguoiNhan/ThongTinNguoiNhan";
import ItemProductThanhToan from "../ItemProductThanhToan/ItemProductThanhToan";

const ThanhToan = () => {
  return (
    <div className="thanhtoan d-flex justify-content-between ">
      <div className="thanhtoan-left">
        <ThongTinNguoiNhan />
      </div>

      <div className="thanhtoan-body">
        <p>Vận chuyển</p>

        <div className="title text-center">
          Vui lòng nhập thông tin giao hàng
        </div>
      </div>

      <div className="thanhtoan-right">
        <p className="thanhtoan-right-title">
          Đơn hàng <span>(10 sản phẩm)</span>{" "}
        </p>

        <div className="thanhtoan-right-product">
          <div className="list-product">
            <ItemProductThanhToan />
            <ItemProductThanhToan />
            <ItemProductThanhToan />
            <ItemProductThanhToan />
            <ItemProductThanhToan />
          </div>
        </div>

        <div className="tamTinh-phiVanChuyen">
          <div className="tamTinh d-flex justify-content-between mx-3 mt-3">
            <p className="tamTinh-title">
              {" "}
              <b>Tạm tính</b>
            </p>
            <p className="tamTinh-gia">4 500 000 đ</p>
          </div>

          <div className="phiVanChuyen d-flex justify-content-between mx-3">
            <p className="phiVanChuyen-title">
              {" "}
              <b>Phí vận chuyển</b>
            </p>
            <p className="phiVanChuyen-gia">25.000 đ</p>
          </div>
        </div>

        <div className="tongTien">
          <div className="tongTien mx-3 d-flex justify-content-between mt-3">
            <p className="tongTien-title">
              {" "}
              <b>Tổng cộng</b>
            </p>
            <p className="tongTien-gia">25.000.000 đ</p>
          </div>
        </div>

        <div className="action-thanhToan d-flex justify-content-between mx-3">
          <a href="#" className="back-cart">
            <iconify-icon
              icon="ion:caret-back-outline"
              style={{ color: "#14606c", position: "relative", top: "2px" }}
            ></iconify-icon>
            Quay về giỏ hàng
          </a>
          <button className="submit-thanhToan">Đặt hàng</button>
        </div>
      </div>
    </div>
  );
};

export default ThanhToan;
