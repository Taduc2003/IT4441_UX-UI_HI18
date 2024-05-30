import React, { useEffect } from "react";
import "./Schedule.css"; // Import css file

const Schedule = () => {
  useEffect(() => {
    // Calendar JavaScript logic
    const daysTag = document.querySelector(".days");
    const currentDate = document.querySelector(".current-date");
    const prevNextIcon = document.querySelectorAll(".icons span");

    let date = new Date();
    let currYear = date.getFullYear();
    let currMonth = date.getMonth();

    const months = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];

    const renderCalendar = () => {
      let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
      let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
      let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
      let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
      let liTag = "";

      for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
      }

      for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
          && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
      }

      for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
      }

      currentDate.innerText = `${months[currMonth]} ${currYear}`;
      daysTag.innerHTML = liTag;
    };

    renderCalendar();

    prevNextIcon.forEach(icon => {
      icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
          date = new Date(currYear, currMonth, new Date().getDate());
          currYear = date.getFullYear();
          currMonth = date.getMonth();
        } else {
          date = new Date();
        }
        renderCalendar();
      });
    });
  }, []);

  return (
    <div className="container">
      <div className="schedule">
        <h2>Lịch làm việc ngày hôm nay</h2>
        <table>
          <thead>
            <tr>
              <th>THỜI GIAN</th>
              <th>CÔNG VIỆC</th>
              <th>ĐỊA ĐIỂM</th>
              <th>TRẠNG THÁI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6H45–9H45</td>
              <td>Dạy học môn ITSS</td>
              <td>D9-401</td>
              <td><span className="status complete">Hoàn thành</span></td>
            </tr>
            <tr>
              <td>10H–12H</td>
              <td>Họp GR1 với sinh viên</td>
              <td>B1-401</td>
              <td><span className="status cancelled">Hủy</span></td>
            </tr>
            <tr>
              <td>13H–15H45</td>
              <td>Dạy học môn UX UI</td>
              <td>D9-401</td>
              <td><span className="status complete">Hoàn thành</span></td>
            </tr>
            <tr>
              <td>16H–17H45</td>
              <td>Báo cáo research</td>
              <td>B1-401</td>
              <td><span className="status complete">Hoàn thành</span></td>
            </tr>
            <tr>
              <td>20H–22H</td>
              <td>Chấm bài cho sinh...</td>
              <td>Nhà</td>
              <td><span className="status incomplete">Chưa hoàn thành</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="datepicker">
        <div className="wrapper">
          <header>
            <p className="current-date"></p>
            <div className="icons">
              <span id="prev" className="material-icons">chevron_left</span>
              <span id="next" className="material-icons">chevron_right</span>
            </div>
          </header>
          <div className="calendar">
            <ul className="weeks">
              <li>Sun</li>
              <li>Mon</li>
              <li>Tue</li>
              <li>Wed</li>
              <li>Thu</li>
              <li>Fri</li>
              <li>Sat</li>
            </ul>
            <ul className="days"></ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
