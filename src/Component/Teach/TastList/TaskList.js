import React, { useState } from "react";
import CircleProgress from "./CircleProgress/CircleProgress.js";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./TaskList.css";

const TaskList = () => {
  const [activeTab, setActiveTab] = useState("completed");
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tasks = {
    completed: [
      {
        title: "Giảng dạy ITSS",
        date: "20/05/2024",
        subtasks: [
          {
            name: "Chuẩn bị bài giảng",
            deadline: "19/05/2024",
            status: "Hoàn thành",
          },
          {
            name: "Tạo bài kiểm tra",
            deadline: "19/05/2024",
            status: "Hoàn thành",
          },
        ],
      },
      {
        title: "Tạo form UX-UI",
        date: "20/05/2024",
        subtasks: [
          {
            name: "Thiết kế giao diện",
            deadline: "19/05/2024",
            status: "Hoàn thành",
          },
          {
            name: "Kiểm tra giao diện",
            deadline: "19/05/2024",
            status: "Hoàn thành",
          },
        ],
      },
      {
        title: "Giảng dạy môn ITSS",
        date: "19/05/2024",
        subtasks: [
          {
            name: "Soạn bài giảng",
            deadline: "18/05/2024",
            status: "Hoàn thành",
          },
        ],
      },
      {
        title: "Chấm bài ITSS",
        date: "18/05/2024",
        subtasks: [
          { name: "Thu bài", deadline: "17/05/2024", status: "Hoàn thành" },
        ],
      },
      {
        title: "Giảng dạy ITSS",
        date: "18/05/2024",
        subtasks: [
          {
            name: "Chuẩn bị bài giảng",
            deadline: "17/05/2024",
            status: "Hoàn thành",
          },
        ],
      },
      {
        title: "Giảng dạy môn ITSS",
        date: "17 May 2023",
        subtasks: [
          {
            name: "Soạn bài giảng",
            deadline: "16/05/2024",
            status: "Hoàn thành",
          },
        ],
      },
    ],
    overdue: [
      {
        title: "Hoàn thành báo cáo",
        date: "15/05/2024",
        percent: 10,
        subtasks: [
          { name: "Viết báo cáo", deadline: "14/05/2024", status: "Quá hạn" },
        ],
      },
      {
        title: "Gửi email nhắc nhở",
        date: "14/05/2024",
        percent: 30,
        subtasks: [
          { name: "Soạn email", deadline: "13/05/2024", status: "Quá hạn" },
        ],
      },
    ],
    incomplete: [
      {
        title: "Chuẩn bị bài giảng mới",
        date: "25/05/2024",
        percent: 60,
        subtasks: [
          {
            name: "Soạn bài giảng",
            deadline: "24/05/2024",
            status: "Chưa hoàn thành",
          },
        ],
      },
      {
        title: "Cập nhật tài liệu học tập",
        date: "24/05/2024",
        percent: 40,
        subtasks: [
          {
            name: "Cập nhật tài liệu",
            deadline: "23/05/2024",
            status: "Chưa hoàn thành",
          },
        ],
      },
    ],
  };

  const getColor = (percent) => {
    if (percent <= 25) return "red";
    if (percent < 100) return "orange";
    return "green";
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
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
        {tasks[activeTab].map((task, index) => {
          let percent = task.percent;
          let color = getColor(percent);

          if (activeTab === "completed") {
            percent = 100;
            color = "green";
          } else if (activeTab === "overdue") {
            color = "red";
          }

          return (
            <div className="item" key={index}>
              <div
                className="item-details"
                onClick={() => handleTaskClick(task)}
              >
                <div className="item-title">{task.title}</div>
                <div className="item-date">{task.date}</div>
              </div>
              <div className="item-actions">
                <CircleProgress percent={percent} color={color} />
              </div>
            </div>
          );
        })}
      </div>

      <Modal show={isModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedTask?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table>
            <thead>
              <tr>
                <th>Tên nhiệm vụ</th>
                <th>Deadline</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {selectedTask?.subtasks.map((subtask, index) => (
                <tr key={index}>
                  <td>{subtask.name}</td>
                  <td>{subtask.deadline}</td>
                  <td>{subtask.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TaskList;
