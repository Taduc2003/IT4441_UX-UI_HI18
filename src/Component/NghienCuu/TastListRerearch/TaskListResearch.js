import React, { useState } from "react";
import CircleProgress from "./CircleProgressResearch/CircleProgress.js";
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
        title: "Đánh giá tài liệu về học máy cho nhận dạng hình ảnh",
        date: "20/06/2024",
        subtasks: [
          { name: "Xác định bài báo nghiên cứu có liên quan", deadline: "19/06/2024", status: "Hoàn thành" },
          { name: "Tóm tắt những phát hiện chính", deadline: "19/06/2024", status: "Hoàn thành" },
        ],
      },
      {
        title: "Thu thập dữ liệu cho nghiên cứu về giao diện bài báo nghiên cứu",
        date: "15/06/2024",
        percent: 80,
        subtasks: [
          { name: "Tuyển dụng người tham gia", deadline: "14/06/2024", status: "Hoàn thành" },
          { name: "Chuẩn bị công cụ khảo sát", deadline: "13/06/2024", status: "Hoàn thành" },
          { name: "Thực hiện thí nghiệm sơ bộ", deadline: "12/06/2024", status: "Hoàn thành" },
          { name: "Cải thiện khảo sát dựa trên kết quả thí nghiệm sơ bộ", deadline: "11/06/2024", status: "Chưa hoàn thành" },
        ],
      },
    ],
    overdue: [
      {
        title: "Chuẩn bị bài thuyết trình cho hội thảo nghiên cứu",
        date: "10/06/2024",
        percent: 50,
        subtasks: [
          { name: "Lập dàn bài thuyết trình", deadline: "09/06/2024", status: "Quá hạn" },
          { name: "Soạn thảo những điểm chính và hình ảnh", deadline: "08/06/2024", status: "Chưa hoàn thành" },
        ],
      },
    ],
    incomplete: [
      {
        title: "Phân tích dữ liệu từ nghiên cứu người dùng",
        date: "27/06/2024",
        percent: 0,
        subtasks: [
          { name: "Dọn dẹp và xử lý sơ bộ dữ liệu", deadline: "N/A" },
          { name: "Thực hiện phân tích thống kê", deadline: "N/A" },
          { name: "Diễn giải kết quả và rút ra kết luận", deadline: "N/A" },
        ],
      },
      {
        title: "Viết bản thảo bài báo nghiên cứu",
        date: "04/07/2024",
        percent: 0,
        subtasks: [
          { name: "Phát triển câu hỏi nghiên cứu và phương pháp luận", deadline: "N/A" },
          { name: "Viết phần tổng quan tài liệu", deadline: "N/A" },
          { name: "Trình bày kết quả và thảo luận", deadline: "N/A" },
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
