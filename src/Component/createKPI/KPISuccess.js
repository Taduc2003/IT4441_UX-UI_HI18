import React from 'react';
import { useNavigate } from 'react-router-dom';
import './KPISuccess.css'; // Tạo file CSS riêng
import Sidebar from '../Sidebar';
const KPISuccess = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/kpisetup'); 
  };
  const handleGoNext = () => {
    navigate('/overview');
  };
  return (<div className="kpi-step1">
    <Sidebar />
    <div className="kpi-step">
        
    <div className="step-indicator">
        <span >
    <div className="step-number">1</div>
    <div className="step-text">Mục tiêu</div>
        </span>
        <span>
    <div className="step-number">2</div>
    <div className="step-text">Thiết lập KPI</div>
        </span>
        <span className="active">
    <div className="step-number">3</div>
    <div className="step-text">Hoàn Thành</div>
        </span>
    </div>

      <div className="success-icon">
        {/* Thêm icon checkmark ở đây, ví dụ: */}
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
      </div>

      <h2>Chúc mừng, bạn đã tạo KPI thành công!</h2>

      <div className="button-group">
        <button onClick={handleGoBack}>TRỞ LẠI</button>
        <button onClick={handleGoNext}>TIẾP TỤC</button> 
      </div>
    </div></div>
  );
};

export default KPISuccess;
