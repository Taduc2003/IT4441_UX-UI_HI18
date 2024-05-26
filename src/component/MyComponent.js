import React from "react";
import '../css/index.css';
import logo from '../img/logo.png'; 

const MyComponent = () => {
    const handleClick = () => {
        alert("click me");
    };

    return (
        <div className="container">
            <div className="logo">
                <img src={logo} alt="HusTracking Logo" />
            </div>
             <h1>HusTracking</h1>
            <h2>Nền tảng quản lý KPI hàng đầu cho giảng viên và sinh viên</h2>
            <div className="buttons">
                <button onClick={handleClick}>Đăng nhập</button>
                <button onClick={() => window.location.href = 'register.html'}>Đăng ký</button>
            </div>
        </div>
    );
}

export default MyComponent;
