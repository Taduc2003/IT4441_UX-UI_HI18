import React from "react";
import { useState } from "react";
import "./Login.css";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className="login">
        <div className="login-container">
          <div className="hus-tracking">HusTracking</div>
          <div className="input-section">
            <div className="email">
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="email-input">
                <input
                  type="email"
                  id="email"
                  className="input-box"
                  defaultValue="johndoe@gmail.com"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <div className="password">
              <div className="password-header">
                <label htmlFor="password" className="label">
                  Mật khẩu
                </label>
                <a href="#" className="forgot-password">
                  Quên mật khẩu?
                </a>
              </div>
              <div className="password-input">
                <input
                  type={isShowPassword ? "text" : "password"}
                  id="password"
                  className="input-box"
                  defaultValue="password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <span
                  className="icon-eye"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                >
                  {isShowPassword ? <VscEyeClosed /> : <VscEye />}
                </span>
              </div>
            </div>
            <div className="remind-me">
              <input type="checkbox" id="keep-signed-in" className="tick" />
              <label htmlFor="keep-signed-in" className="keep-me-signed-in">
                Keep me signed in
              </label>
            </div>
            <button className="button-primary">Đăng nhập</button>
            <div className="divider">
              <div className="line-10"></div>
              <div className="sign-in-with">hoặc đăng nhập với</div>
            </div>
            <button className="button-secondary">
              <img className="google" src="group0.svg" alt="Google icon" />
              Đăng nhập với google
            </button>
          </div>
          <a href="#" className="create-account">
            Tạo tài khoản
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
