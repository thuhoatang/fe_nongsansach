import React, { useState } from "react";
import "./Login.css";
import { connect } from "react-redux";
import { signInAction, signInWithGoogleAction } from "../../actions/authAction";
import { useNavigate } from "react-router-dom";
import { displayNoticationAction } from "../../actions/notficationAction";
import { gapi } from "gapi-script";
const Login = ({ signInAction, auth, displayNoticationAction, signInWithGoogleAction }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const onFormSubmit = (e) => {
    e.preventDefault();
    const submit = async () => {
      const res = await signInAction({ username: username, password: password });
      displayNoticationAction('Bạn đã đăng nhập thành công!');
      if (res) {
        navigate('/trang-chu');
      }
    };

    submit();
  };
  const clientId = '409778289628-qv33ds56lv54pruam4ti7dkl2550pj4i.apps.googleusercontent.com';

  const onClickGoogbleButton = () => {
    const getdata = async () => {

      const initClient = () => {
        gapi.client.init({
          clientId: clientId,
          scope: 'email'
        });
      };
      await gapi.load('client:auth2', initClient);
      await gapi.auth2.getAuthInstance().signIn()
      const profile = await gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
      const res = await signInWithGoogleAction({
        name: profile.getName(),
        email: profile.getEmail(),
        google_id: profile.getId()

      });
      if (res) {
        navigate('/trang-chu');
      }
    }
    getdata();

  }
  return (
    <div className="container form-singin text-center">
      <form onSubmit={onFormSubmit}>
        <p className="title-form">ĐĂNG NHẬP</p>
        <p className="dang-ki-tai-day">
          Nếu bạn chưa có tài khoản, <a href="#">đăng kí tại đây!</a>
        </p>

        <div id="emailHelp" className="form-text error">
          {auth?.error}
        </div>

        <div className="mb-3">
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            className=""
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Tên đăng nhập"
          ></input>
        </div>
        <div className="mb-3">
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className=""
            placeholder="Mật khẩu"
            id="exampleInputPassword1"
          ></input>
        </div>

        <button type="submit" className="btn-signin">
          Đăng nhập
        </button>
      </form>

      <div className="login-google">
        <p className="my-3">Hoặc đăng nhập bằng</p>

        <button className="btn-login-google" onClick={() => { onClickGoogbleButton(); }}>Google</button>
      </div>
    </div>
  );
};

const mapstateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapstateToProps, { signInAction, displayNoticationAction, signInWithGoogleAction })(Login);
// export default Login;
