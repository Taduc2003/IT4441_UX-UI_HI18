import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import welcome from "../../img/welcome.jpg";
const MyComponent = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="mycomponent-container">
      <header>
        <div className="header-nav">
          <nav>
            <ul>
              <li>
                <a href="#" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#">About Me</a>
              </li>
              <li className="logo">
                <div className="logo-pic">
                  
                </div>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="home-container">
        <div className="welcome-section">
          <h3>Chào mừng bạn đến với HusTracking</h3>
          <p>Nền tảng quản lý KPI hàng đầu cho giảng viên và sinh viên</p>
          <div className="buttons">
            <button className="login-button" onClick={handleLogin}>
              Đăng nhập
            </button>
            <button className="register" onClick={handleRegister}>
              Đăng ký
            </button>
          </div>
        </div>
        <div className="welcome-image">
          <img src={welcome} alt="KPI Overview" />
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
