import React from "react";
import "./Footer.css";
import logo_img from "../../asset/img/logo_white.png";
import quacam from "../../asset/img/quacam.png";
const Footer = () => {
  return (
    <div className="footer container-fluid">
      <div className="row text-center">
        <div className="col">
          <h4>ĐĂNG KÝ NHẬN THÔNG TIN</h4>
          <p>
            Đăng ký nhận bản tin để nhận ưu đãi đặc biệt về sản phẩm Greenfood
          </p>
          <input placeholder="Email..." />
        </div>
        <div className="col">
          <img src={logo_img} />
          <p>
            Website thương mại điện tử ND Fresh do ND Group là đơn vị chủ quản,
            chịu trách nhiệm và thực hiện các giao dịch liên quan mua sắm sản
            phẩm hàng hoá tiêu dùng thiết yếu.
          </p>

          <img className="quacam" src={quacam} />
        </div>
        <div className="col">
          <h4>LIÊN HỆ VỚI CHÚNG TÔI</h4>
          <p>
            <b>Địa chỉ: </b>
            224, Đinh Tiên Hoàng, Hải Châu, TP Đà Nẵng
          </p>
          <p>
            <b>Điện thoại: </b>
            0905589210
          </p>
          <p>
            <b>Email: </b>
            thuhoatang2001@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
