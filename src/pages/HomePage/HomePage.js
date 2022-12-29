import React from "react";
import "./HomePage.css";
import CategoryCircle from "../../components/CategoryCircle/CategoryCircle";
import rau from "../../asset/img/rau.png";
import cu from "../../asset/img/cu.png";
import traicay from "../../asset/img/traicay.png";
import thit from "../../asset/img/thit.png";
import ca from "../../asset/img/ca.png";
import SectionIntro from "../../components/SectionIntro/SectionIntro";
import TopProduct from "../../components/TopProduct/TopProduct";

const HomePage = () => {
  return (
    <>
      <div className="category_list d-flex justify-content-evenly">
        <CategoryCircle src={rau} nameSP="Rau" />
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
    </>
  );
};

export default HomePage;
