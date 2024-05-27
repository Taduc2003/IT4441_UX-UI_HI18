import React from "react";
import "./index.css";
const MyComponent = () => {
  const handleClick = () => {
    alert("click me");
  };

  return (
    <div className="container">
      <header>
        <div class="header-nav">
          <nav>
            <ul>
              <li>
                <a href="#" class="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#">About Me</a>
              </li>
              <li class="logo">
                <h1>HusTracking</h1>
                <p>Best tracking website</p>
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
      <main>
        <div class="welcome-section">
          <h3>Chào mừng bạn đến với HusTracking</h3>
          <p>Nền tảng quản lý KPI hàng đầu cho giảng viên và sinh viên</p>
          <div class="buttons">
            <button class="login">Đăng nhập</button>
            <button class="register">Đăng ký</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyComponent;
