import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./MasterLayout.css";

const MasterLayout = (props) => {
  return (
    <>
      <Header />
      <div className="body">{props.children}</div>
      <Footer />
    </>
  );
};

export default MasterLayout;
