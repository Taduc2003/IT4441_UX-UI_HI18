import React from "react";
import "./SpecialTime.css";

const SpecialTime = () => {
  return (
    <div className="time-container">
      <h2>
        Số giờ đào tạo chuyên môn theo tháng{" "}
        <span>*So sánh với tháng trước</span>
      </h2>
      <div className="grid">
        <div className="time-item">
          <h3>ITSS</h3>
          <p className="hours">13 giờ</p>
          <p className="change positive">↑ 3,3%</p>
        </div>
        <div className="time-item">
          <h3>Kĩ thuật phần mềm</h3>
          <p className="hours">16 giờ</p>
          <p className="change positive">↑ 0,6%</p>
        </div>
        <div className="time-item">
          <h3>UI-UX</h3>
          <p className="hours">25 giờ</p>
        </div>
        <div className="time-item">
          <h3>Trí tuệ nhân tạo</h3>
          <p className="hours">11 giờ</p>
          <p className="change negative">↓ 0,6%</p>
        </div>
      </div>
    </div>
  );
};

export default SpecialTime;
