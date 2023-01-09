import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAction } from "../../actions/authAction";
import { displayNoticationAction } from "../../actions/notficationAction";
import "./ButtonAccount.css";

const ButtonAccount = ({ auth, logoutAction, displayNoticationAction }) => {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <div>
          <button className="btn_icon_acc mx-2">
            <iconify-icon
              style={{ fontSize: "30px", color: "white" }}
              icon="mdi-light:account"
            ></iconify-icon>
          </button>
        </div>

        {isHovering && (
          auth == null ?
            (
              <div className="btn_acc_hover text-center">

                <Link className="btn_account" to="/sign-up">
                  Đăng ký
                </Link>
                <Link className="btn_account" to="/signin">
                  Đăng nhập
                </Link>
                {/* <Link to="dư">đ</Link> */}
              </div>
            ) : (<div className="btn_acc_hover text-center">

              <Link className="btn_account" to="/ca-nhan">
                Cá nhân
              </Link>
              <div className="btn_account"
                onClick={async () => {
                  await logoutAction();
                  navigate('/signin')
                  displayNoticationAction('Bạn đã đăng xuất thành công!', 1000);

                }}>
                Đăng xuất
              </div>
              {/* <Link to="dư">đ</Link> */}
            </div>)

        )}
      </div>
    </>
  );
};
const mapstateToProps = (state) => {
  return {
    auth: state.auth

  };
};
export default connect(mapstateToProps, { logoutAction, displayNoticationAction })(ButtonAccount);
