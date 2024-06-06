import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import "./TaskDiagram.css";

const TaskDiagram = () => {
  const [timePeriod, setTimePeriod] = useState("week");

  const data = {
    week: {
      labels: ["18 Mon", "19 Tue", "20 Wed", "21 Thu"],
      datasets: [
        {
          label: "Tuần này",
          backgroundColor: "#FF698D",
          data: [6, 4, 7, 6],
        },
        {
          label: "Tuần trước",
          backgroundColor: "#E8E8E8",
          data: [5, 6, 4, 5],
        },
      ],
    },
    month: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Tháng này",
          backgroundColor: "#FF698D",
          data: [20, 25, 30, 35],
        },
        {
          label: "Tháng trước",
          backgroundColor: "#E8E8E8",
          data: [18, 24, 28, 32],
        },
      ],
    },
    year: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Năm nay",
          backgroundColor: "#FF698D",
          data: [200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750],
        },
        {
          label: "Năm trước",
          backgroundColor: "#E8E8E8",
          data: [180, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640],
        },
      ],
    },
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        max: timePeriod === "week" ? 8 : timePeriod === "month" ? 40 : 800,
      },
    },
  };

  return (
    <div className="statistics-details">
      <div className="header">
        <div className="frame-40384">
          <div className="s-gi-gi-ng-d-y-trong-tu-n">Số giờ giảng dạy</div>
          <select
            className="time-selector"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
          >
            <option value="week">Tuần</option>
            <option value="month">Tháng</option>
            <option value="year">Năm</option>
          </select>
        </div>
        <div className="indicator2"></div>
      </div>
      <div className="graph">
        <Bar data={data[timePeriod]} options={options} />
      </div>
    </div>
  );
};

export default TaskDiagram;
