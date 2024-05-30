import React, { useState } from "react";
import "./TaskList.css";

const TaskList = () => {
  const [activeTab, setActiveTab] = useState("completed");

  const tasks = {
    completed: [
      { title: "Giảng dạy ITSS", date: "20/05/2024" },
      { title: "Tạo form UX-UI", date: "20/05/2024" },
      { title: "Giảng dạy môn ITSS", date: "19/05/2024" },
      { title: "Chấm bài ITSS", date: "18/05/2024" },
      { title: "Giảng dạy ITSS", date: "18/05/2024" },
      { title: "Giảng dạy môn ITSS", date: "17 May 2023" },
    ],
    overdue: [
      { title: "Hoàn thành báo cáo", date: "15/05/2024" },
      { title: "Gửi email nhắc nhở", date: "14/05/2024" },
    ],
    incomplete: [
      { title: "Chuẩn bị bài giảng mới", date: "25/05/2024" },
      { title: "Cập nhật tài liệu học tập", date: "24/05/2024" },
    ],
  };

  return (
    <div className="content">
      <div className="menu-tab">
        <div
          className={`tab ${activeTab === "completed" ? "active" : ""}`}
          onClick={() => setActiveTab("completed")}
        >
          <div className="tab-text">Đã Hoàn Thành</div>
        </div>
        <div
          className={`tab ${activeTab === "overdue" ? "active" : ""}`}
          onClick={() => setActiveTab("overdue")}
        >
          <div className="tab-text">Quá Hạn</div>
        </div>
        <div
          className={`tab ${activeTab === "incomplete" ? "active" : ""}`}
          onClick={() => setActiveTab("incomplete")}
        >
          <div className="tab-text">Chưa Hoàn Thành</div>
        </div>
      </div>
      <div className="item-list">
        {tasks[activeTab].map((task, index) => (
          <div className="item" key={index}>
            <div className="item-details">
              <div className="item-title">{task.title}</div>
              <div className="item-date">{task.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
