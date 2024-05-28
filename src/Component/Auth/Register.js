import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Register = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/login");
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="login">
        <div className="login-container">
          <div className="hus-tracking">HusTracking</div>
          <div className="input-section">
            <div className="name">
              <label htmlFor="name" className="label">
                Tên hiển thị
              </label>
              <div className="email-input">
                <input
                  type="text"
                  id="name"
                  className="input-box"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
            </div>
            <div className="email">
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="email-input">
                <input
                  type="email"
                  id="email"
                  className="input-box"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <div className="password">
              <div className="password-header">
                <label htmlFor="password" className="label">
                  Mật khẩu
                </label>
              </div>
              <div className="password-input">
                <input
                  type={isShowPassword ? "text" : "password"}
                  id="password"
                  className="input-box"
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
            <div className="terms">
              By continuing, you agree to our <a href="#">terms of service</a>.
            </div>
            <button className="button-primary" onClick={handleRegister}>
              Đăng ký
            </button>
            <div className="divider">
              <div className="line-10"></div>
              <div className="sign-in-with">hoặc đăng ký với</div>
            </div>
            <button className="button-secondary">
              <img className="google" src="group0.svg" alt="Google icon" />
              Đăng ký với google
            </button>
          </div>
          <div className="login-link">
            Bạn đã có tài khoản?{" "}
            <a href="#" onClick={handleSignIn}>
              Đăng nhập ở đây
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
