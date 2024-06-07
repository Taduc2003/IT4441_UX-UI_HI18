import React from "react";
import "./CircleProgress.css";

const CircleProgress = ({ percent, color }) => {
  return (
    <div className="circlePercent" style={{ backgroundColor: color }}>
      <div className="counter" data-percent={percent}>
        {percent}%
      </div>
    </div>
  );
};

export default CircleProgress;
