import React, { useState } from "react";
import "./ThanhToan.css";
import ThongTinNguoiNhan from "../ThongTinNguoiNhan/ThongTinNguoiNhan";
import ItemProductThanhToan from "../ItemProductThanhToan/ItemProductThanhToan";
import { connect } from "react-redux";
import { payment } from "../../service/paymentService";
import { useNavigate } from "react-router-dom";
import { checkAuthAction } from "../../actions/authAction";
import { expandedCartAction } from "../../actions/cartItemAction";
const ThanhToan = ({ cart, checkAuthAction, expandedCartAction }) => {
  const [fee, setFee] = useState(0);
  const [infoInvoice, setInfoInvoice] = useState({})
  const navigate = useNavigate();
  let total = 0
  let weight = 0;
  const renderItems = cart.items.map((item) => {
    total += item.product.price * item.quantity
    weight += item.quantity;
    return <ItemProductThanhToan key={item.id} values={item} />

  })


  const onCLickSubmit = async () => {
    const error = {};
    if (Object.keys(error).length === 0) {

      const response = await payment({ ...infoInvoice, transport_fee: fee, address: `${infoInvoice.address}, ${infoInvoice.wardName}, ${infoInvoice.districtName}, ${infoInvoice.provinceName}` });
      checkAuthAction();
      expandedCartAction(false);
      navigate('/ca-nhan/don-hang/' + response.id);

    }
  }

  return (
    <div className="thanhtoan d-flex justify-content-between ">
      <div className="thanhtoan-left">
        <ThongTinNguoiNhan weight={weight * 1000} setFee={setFee} setInfoInvoice={setInfoInvoice} infoInvoice={infoInvoice} />
      </div>

      <div className="thanhtoan-body">
        <p>Vận chuyển</p>

        <div className="title text-center">
          Vui lòng nhập thông tin giao hàng
        </div>
      </div>

      <div className="thanhtoan-right">
        <p className="thanhtoan-right-title">
          Đơn hàng <span>({cart.amount} sản phẩm)</span>{" "}
        </p>

        <div className="thanhtoan-right-product">
          <div className="list-product">
            {renderItems}

          </div>
        </div>

        <div className="tamTinh-phiVanChuyen">
          <div className="tamTinh d-flex justify-content-between mx-3 mt-3">
            <p className="tamTinh-title">
              {" "}
              <b>Tạm tính</b>
            </p>
            <p className="tamTinh-gia">{new Intl.NumberFormat().format(total).replaceAll(",", " ")} đ</p>
          </div>

          <div className="phiVanChuyen d-flex justify-content-between mx-3">
            <p className="phiVanChuyen-title">
              <b>Phí vận chuyển</b>
            </p>
            <p className="phiVanChuyen-gia">{new Intl.NumberFormat().format(fee).replaceAll(",", " ")} đ</p>
          </div>
        </div>

        <div className="tongTien">
          <div className="tongTien mx-3 d-flex justify-content-between mt-3">
            <p className="tongTien-title">
              {" "}
              <b>Tổng cộng</b>
            </p>
            <p className="tongTien-gia">{new Intl.NumberFormat().format(total + fee).replaceAll(",", " ")} đ</p>
          </div>
        </div>

        <div className="action-thanhToan d-flex justify-content-between mx-3">
          <div className="back-cart">
            <iconify-icon
              icon="ion:caret-back-outline"
              style={{ color: "#14606c", position: "relative", top: "2px" }}
            ></iconify-icon>
            Quay về giỏ hàng
          </div>
          <button onClick={() => onCLickSubmit()} className="submit-thanhToan">Đặt hàng</button>
        </div>
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return { cart: state.cart }
}
export default connect(mapStatetoProps, { checkAuthAction, expandedCartAction })(ThanhToan);
