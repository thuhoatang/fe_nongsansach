import React from "react";
import "./SectionIntro.css";
import banner from "../../asset/img/banner_2.png";
import anh1 from "../../asset/img/imgIntro_1.png";
import anh2 from "../../asset/img/imgIntro_2.png";
import anh3 from "../../asset/img/imgIntro_3.png";

const SectionIntro = () => {
  return (
    <>
      <div className="section_intro container my-5">
        <div className="row">
          <div className="col banner-left">
            <img src={banner} />
          </div>
          <div className="col text-center">
            <div className="title_module_main">
              <h3>Chúng tôi cung cấp</h3>

              <h5>CÁC SẢN PHẨM NÔNG SẢN TƯƠI - SẠCH</h5>
            </div>
            <div className="content_module_main">
              <p>
                Cửa hàng &nbsp; <b>Nông sản sạch</b> &nbsp;là một website cung
                cấp thực phẩm an toàn, nông sản sạch cho người dân. Với mong
                muốn mang tới mọi gia đình những thực phẩm an toàn nhất trước
                mối lo ngại về thực phẩm bẩn tại Việt Nam.
                <br />
                <br />
                Với mục đích là "Mang thiên nhiên về với căn nhà của bạn"
              </p>
            </div>

            <div className="img_intro_list d-flex justify-content-start">
              <div className="swiper-slide">
                <img src={anh1} />
              </div>
              <div className="swiper-slide">
                <img src={anh2} />
              </div>
              <div className="swiper-slide">
                <img src={anh3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionIntro;
