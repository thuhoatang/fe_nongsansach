import React from "react";
import Header from "../components/Header/Header";

const MasterLayout = (props) => {
  return (
    <>
      <Header />
      <div className="body">{props.children}</div>
    </>
  );
};

export default MasterLayout;
