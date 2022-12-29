import "./Header.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../SearchBar/SearchBar";
import logo_img from "../../asset/img/logo_img.png";
import banner_img from "../../asset/img/banner_home.png";
import ButtonAccount from "../ButtonAccount/ButtonAccount";
import ButtonCart from "../ButtonCart/ButtonCart";
import MenuHeader from "../MenuHeader/MenuHeader";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-white">
        <div className="container-fluid">
          <div className="navbar-brand px-3">
            <SearchBar />
          </div>

          <img src={logo_img} />

          <div className="d-flex px-5">
            <ButtonAccount />
            <ButtonCart />
          </div>
        </div>
      </nav>

      <div className="img_banner w-100">
        <div className="menu_header w-100">
          <MenuHeader />
        </div>
        <img src={banner_img} />
      </div>
    </>
  );
};

export default Header;
