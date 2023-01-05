import React, { useState } from "react";
import "./Login.css";
import { connect } from "react-redux";
import { signInAction } from "../../actions/authAction";

const Login = ({ signInAction, auth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    const submit = async () => {
      signInAction({ username: username, password: password });
    };

    submit();
  };
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

        <button className="btn-login-google">Google</button>
      </div>
    </div>
  );
};

const mapstateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapstateToProps, { signInAction })(Login);
// export default Login;
