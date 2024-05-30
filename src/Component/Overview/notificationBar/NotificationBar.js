import React from "react";
import { WiDayCloudy } from "react-icons/wi";
import "./NotificationBar.css";


const NotificationBar = () => {
  return (
    <div className="notificationBar">
      <div className="weather"> {/* this block has a right border of 1 px solid black */}
        <div className="weatherIcon">
          <WiDayCloudy />
        </div>
        <div className="weatherText">
          <p>Partly cloudy</p>
        </div>
      </div>

      <div className="dateTime">
        <div className="today">
          <p>28 tháng 5 năm 2024</p>
        </div>
        <div className="time">
          <h2>9:50 AM</h2>
        </div>
      </div>

      <div className="pic">
        {/* i wanna set a pic of the man running here */}
      </div>

      <div className="workNow">
        <h3>Họp GR1 với sinh viên lúc 10:00 </h3>
      </div>
    </div>
  )
};

export default NotificationBar;
