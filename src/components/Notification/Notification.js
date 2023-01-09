import React from "react";
import "./Notification.css";
import icon from "../../asset/img/iconTB.png";
import { connect } from "react-redux";

const Notification = ({ notification }) => {
  return (
    <>{notification.status &&
      (<div className="notification text-center">
        <div className="body">
          <p className="title">Thông báo</p>
          <img src={icon} />
          <p className="content">{notification.message}</p>

          <button className="btn-ok">OK</button>
        </div>
      </div>)}

    </>

  );
};
const mapStateToProps = (state) => {
  return { notification: state.notification }
}
export default connect(mapStateToProps)(Notification);
