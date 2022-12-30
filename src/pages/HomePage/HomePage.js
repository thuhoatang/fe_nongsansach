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
import { connect } from "react-redux";

const HomePage = ({ categories }) => {
  return (
    <>
      <div className="category_list d-flex justify-content-evenly">
        {categories.map((category) => (<CategoryCircle key={category.id} quantity={category.products_count} src={category.url_image} nameSP={category.name} />))}

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
const mapstateToProps = (state) => {
  return {
    categories: state.categories

  };
};
export default connect(mapstateToProps, {})(HomePage);
// export default HomePage;
