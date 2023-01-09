import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const ManageLayout = ({ auth, children }) => {

  return (
    <>
      {children}
      {/* <Footer /> */}
    </>
  );
};
const mapStatetoProps = (state) => {
  return {
    auth: state.auth
  }
}
export default connect(mapStatetoProps)(ManageLayout);
