import React from "react";
import "./HomePage.css";
import CategoryCircle from "../../components/CategoryCircle/CategoryCircle";
import rau from "../../asset/img/bapcai.png";
import cu from "../../asset/img/khoai.png";
import traicay from "../../asset/img/bi.png";
import thit from "../../asset/img/bo.png";
import ca from "../../asset/img/cahoi.png";
import banner3 from "../../asset/img/banner_3.png";
import SectionIntro from "../../components/SectionIntro/SectionIntro";
import TopProduct from "../../components/TopProduct/TopProduct";
import TabProduct from "../../components/TabProduct/TabProduct";

const HomePage = () => {
  return (
    <>
      <div className="category_list d-flex justify-content-evenly">
        <CategoryCircle
          src="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
          nameSP="Rau"
        />
        <CategoryCircle src={cu} nameSP="Củ" />
        <CategoryCircle src={traicay} nameSP="Trái cây" />
        <CategoryCircle src={thit} nameSP="Thịt" />
        <CategoryCircle src={ca} nameSP="Cá" />
      </div>

      <div className="section_intro">
        <SectionIntro />
      </div>

      <div className="section_sanphambanchay text-center container-fluid">
        <TopProduct />
      </div>

      <div className="section_product-tabs">
        <TabProduct />
      </div>

      <div className="section_banner w-100 my-5">
        <img className="w-100" src={banner3} />
      </div>
    </>
  );
};

export default HomePage;
