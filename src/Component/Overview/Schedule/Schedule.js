import React, { useEffect, useState } from "react";
import "./Schedule.css"; // Import css file
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify

const schedules = {
  0: [ // Sunday
    { time: "6H45–9H45", task: "Dạy học môn TTKH", location: "D9-401", status: "Hoàn thành" },
    { time: "10h–17h", task: "Đi chơi với gia đình", location: "Biển Thanh Hóa", status: "Hoàn thành" },
  ],
  1: [ // Monday
    { time: "6H45–9H45", task: "Dạy học môn ITSS", location: "D9-401", status: "Hoàn thành" },
    { time: "10H–12H", task: "Họp GR1 với sinh viên", location: "B1-401", status: "Hủy" },
    { time: "13H–15H45", task: "Dạy học môn UX UI", location: "D9-401", status: "Hoàn thành" },
    { time: "16H–17H45", task: "Báo cáo research", location: "B1-401", status: "Hoàn thành" },
    { time: "20H–22H", task: "Chấm bài cho sinh...", location: "Nhà", status: "Chưa hoàn thành" },
  ],
  2: [ // Tuesday
    { time: "6H45–9H45", task: "Dạy học môn ITSS", location: "D9-401", status: "Hoàn thành" },
    { time: "10H–12H", task: "Họp GR2 với sinh viên", location: "B1-401", status: "Hủy" },
    { time: "13H–15H45", task: "Tham gia hội thảo", location: "D9-401", status: "Hoàn thành" },
  ],
  3: [ // Wednesday
    { time: "13H–15H45", task: "Dạy học môn Nhật Ngành", location: "C7-203", status: "Hoàn thành" },
    { time: "16H–17H45", task: "Báo cáo nghiên cứu mới", location: "B1-401", status: "Hoàn thành" },
    { time: "20H–22H", task: "Chấm bài cho sinh...", location: "Nhà", status: "Chưa hoàn thành" },
  ],
  4: [ // Thursday
    { time: "6H45–9H45", task: "Dạy học môn Thể dục", location: "Nhà thể chất", status: "Hoàn thành" },
    { time: "20H–22H", task: "Làm bài thi giữa kì", location: "Nhà", status: "Chưa hoàn thành" },
  ],
  5: [ // Friday
    { time: "6H45–9H45", task: "Dạy học môn Giải tích 1", location: "D9-401", status: "Hoàn thành" },
    { time: "10H–12H", task: "Họp GR1 với sinh viên", location: "B1-401", status: "Hủy" },
    { time: "13H–15H45", task: "Dạy học môn UX UI", location: "D9-401", status: "Hoàn thành" },
    { time: "16H–17H45", task: "Nghiên cứu sản phẩm mới", location: "B1-401", status: "Hoàn thành" },
    { time: "20H–22H", task: "Chơi với con", location: "Nhà", status: "Chưa hoàn thành" },
  ],
  6: [ // Saturday
    { time: "6H45–9H45", task: "Dạy học Xử lí tín hiệu", location: "D9-401", status: "Hoàn thành" },
    { time: "10H–12H", task: "Họp GR3 với sinh viên", location: "B1-401", status: "Hủy" },
  ],
};

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [todaySchedule, setTodaySchedule] = useState([]);

  useEffect(() => {
    const day = selectedDate.getDay();
    setTodaySchedule(schedules[day] || []);
  }, [selectedDate]);

  useEffect(() => {
    // Calendar JavaScript logic
    const daysTag = document.querySelector(".schedule-calendar-days");
    const currentDate = document.querySelector(".schedule-header-current-date");
    const prevNextIcon = document.querySelectorAll(".schedule-header-icons span");

    let date = new Date();
    let currYear = date.getFullYear();
    let currMonth = date.getMonth();

    const months = [
      "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7",
      "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
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
        liTag += `<li class="${isToday}" data-date="${i}">${i}</li>`;
      }

      for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
      }

      currentDate.innerText = `${months[currMonth]} ${currYear}`;
      daysTag.innerHTML = liTag;

      document.querySelectorAll(".schedule-calendar-days li").forEach(day => {
        day.addEventListener("click", () => {
          const dayDate = day.getAttribute("data-date");
          const newDate = new Date(currYear, currMonth, dayDate);
          setSelectedDate(newDate);
        });
      });
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

  const handleStatusChange = (event, index) => {
    const newStatus = event.target.value;
    const updatedSchedule = [...todaySchedule];
    updatedSchedule[index].status = newStatus;
    setTodaySchedule(updatedSchedule);
    toast.success("Cập nhật thành công!");
  };

  return (
    <div className="schedule-global-container">
      <div className="schedule-container">
        <div className="schedule-schedule">
          <h2>Lịch làm việc ngày hôm nay</h2>
          <table className="schedule-table">
            <thead>
              <tr>
                <th className="schedule-th">THỜI GIAN</th>
                <th className="schedule-th">CÔNG VIỆC</th>
                <th className="schedule-th">ĐỊA ĐIỂM</th>
                <th className="schedule-th">TRẠNG THÁI</th>
              </tr>
            </thead>
            <tbody>
              {todaySchedule.map((task, index) => (
                <tr key={index}>
                  <td className="schedule-td">{task.time}</td>
                  <td className="schedule-td">{task.task}</td>
                  <td className="schedule-td">{task.location}</td>
                  <td className="schedule-td">
                    <select 
                      value={task.status}
                      onChange={(e) => handleStatusChange(e, index)}
                      className={`status ${task.status === "Hoàn thành" ? "complete" : task.status === "Hủy" ? "cancelled" : "incomplete"}`}
                    >
                      <option value="Hoàn thành">Hoàn thành</option>
                      <option value="Hủy">Hủy</option>
                      <option value="Chưa hoàn thành">Chưa hoàn thành</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="schedule-wrapper">
          <header>
            <p className="schedule-header-current-date"></p>
            <div className="schedule-header-icons">
              <span id="prev" className="material-icons">chevron_left</span>
              <span id="next" className="material-icons">chevron_right</span>
            </div>
          </header>
          <div className="schedule-calendar">
            <ul className="schedule-calendar-weeks">
              <li>CN</li>
              <li>T2</li>
              <li>T3</li>
              <li>T4</li>
              <li>T5</li>
              <li>T6</li>
              <li>T7</li>
            </ul>
            <ul className="schedule-calendar-days"></ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
