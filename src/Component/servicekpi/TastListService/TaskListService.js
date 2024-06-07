import React, { useState } from "react";
import CircleProgress from "./CircleProgressService/CircleProgress.js";
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
        title: 'Talk-show: "Nóng lên toàn cầu"',
        date: "08/07/2024",
        percent: 100,
        subtasks: [
          { name: "Chuẩn bị kịch bản", deadline: "30/06/2024", status: "Hoàn thành" },
          {  name: "Tạo bài viết giới thiệu talkshow", deadline: "26/06/2024", status: "Hoàn thành"  },
        ],
      },
    ],
    overdue: [
      {
        title: "Tham gia hoạt động dọn dẹp môi trường",
        date: "10/06/2024",
        percent: 50,
        subtasks: [
          { name: "Đăng ký tham gia", deadline: "09/06/2024", status: "Hoàn thành" },
          { name: "Chuẩn bị dụng cụ dọn dẹp", deadline: "10/06/2024", status: "Chưa hoàn thành" },
        ],
      },
    ],
    incomplete: [
      {
        title: "Tổ chức buổi quyên góp sách cho trẻ em mồ côi",
        date: "27/06/2024",
        percent: 20,
        subtasks: [
          { name: "Liên hệ với các nhà hảo tâm", deadline: "26/06/2024", status: "Chưa hoàn thành" },
          { name: "Chuẩn bị địa điểm và vật dụng", deadline: "25/06/2024", status: "Chưa hoàn thành" },
          { name: "Quảng bá sự kiện", deadline: "24/06/2024", status: "Chưa hoàn thành" },
        ],
      },
      {
        title: "Tham gia chương trình tình nguyện xây nhà cho người nghèo",
        date: "04/07/2024",
        percent: 0,
        subtasks: [
          { name: "Đăng ký tham gia", deadline: "03/07/2024", status: "Chưa hoàn thành" },
          { name: "Chuẩn bị dụng cụ xây dựng", deadline: "02/07/2024", status: "Chưa hoàn thành" },
          { name: "Hỗ trợ xây dựng nhà", deadline: "04/07/2024", status: "Chưa hoàn thành" },
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
