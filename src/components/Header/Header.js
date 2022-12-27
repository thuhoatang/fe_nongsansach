import "./Header.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../SearchBar/SearchBar";
import logo_img from "../../asset/img/logo_img.png";
import ButtonAccount from "../ButtonAccount/ButtonAccount";
import ButtonCart from "../ButtonCart/ButtonCart";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-white">
        <div className="container-fluid">
          <div className="navbar-brand">
            <SearchBar />
          </div>

          <img src={logo_img} />

          <div className="d-flex">
            <ButtonAccount />
            <ButtonCart />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
