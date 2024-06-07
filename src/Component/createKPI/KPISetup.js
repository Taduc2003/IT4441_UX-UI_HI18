import React, { useState } from "react";
import { Form, Button, Row, Col, InputGroup, Modal } from "react-bootstrap";
import "./KPISetup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "../header/Header";

const KPISetup = () => {
  const navigate = useNavigate();
  const [editingTask, setEditingTask] = useState(null);
  const [editedTask, setEditedTask] = useState({});
  const goalWeights = {
    "Giảng dạy": 30,
    "Nghiên cứu": 30,
    "Phục vụ": 30,
  };

  const [subGoals, setSubGoals] = useState([
    "Giảng dạy",
    "Nghiên cứu",
    "Phục vụ",
  ]);
  const [tasks, setTasks] = useState({
    "Giảng dạy": [
      {
        name: "Dạy UIUX",
        time: "T2+T6 7-9",
        location: "09-401",
        duration: "2.15h",
        weight: "50%",
      },
      {
        name: "ITSS",
        time: "T5-T6 1-4",
        location: "09-401",
        duration: "3h",
        weight: "50%",
      },
    ],
    "Nghiên cứu": [],
    "Phục vụ": [],
  });

  // ... các hàm xử lý sự kiện
  const handleEditTask = (subGoal, index) => {
    setEditingTask({ subGoal, index });
    setEditedTask(tasks[subGoal][index]); // Sao chép dữ liệu task để chỉnh sửa
  };

  const handleDeleteTask = (subGoal, index) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [subGoal]: prevTasks[subGoal].filter((_, i) => i !== index),
    }));
  };

  const handleSaveTask = (subGoal, index) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [subGoal]: prevTasks[subGoal].map((task, i) =>
        i === index ? editedTask : task
      ),
    }));
    setEditingTask(null);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const handleInputChange = (field, value) => {
    setEditedTask((prevTask) => ({ ...prevTask, [field]: value }));
  };

  const handleGoBack = () => {
    navigate("/createKPI");
  };
  const handleGoNext = () => {
    navigate("/kpisuccess");
  };

  // Hàm tính toán trọng số (không thay đổi)
  const calculateWeight = (subGoal, taskDuration) => {
    const expectedHours =
      subGoal === "Giảng dạy" ? 30 : subGoal === "Nghiên cứu" ? 8 : 4;
    const weight = Math.round((parseFloat(taskDuration) / expectedHours) * 100);
    return isNaN(weight) ? 0 : weight;
  };
  const [showModal, setShowModal] = useState(false); // State để kiểm soát hiển thị modal
  const [newTask, setNewTask] = useState({
    // State để lưu thông tin nhiệm vụ mới
    name: "",
    time: "",
    location: "",
    duration: "",
    weight: "",
  });
  const [currentSubGoal, setCurrentSubGoal] = useState(null); // Lưu trữ mục tiêu hiện tại
  // ... (các hàm khác)
  const handleShowModal = (subGoal) => {
    setShowModal(true);
    setCurrentSubGoal(subGoal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewTask({ name: "", time: "", location: "", duration: "", weight: "" }); // Reset form
  };

  const handleAddTask = () => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [currentSubGoal]: [...prevTasks[currentSubGoal], newTask],
    }));
    handleCloseModal();
  };

  const handleTaskInputChange = (field, value) => {
    setNewTask((prevTask) => ({ ...prevTask, [field]: value }));
  };

  return (
    <div className="kpi-step1">
      <div className="header-wrapper">
        <Header />
      </div>

      <div className="main-content">
        <Sidebar />
        <div className="setup-content">
          <div className="kpi-step">
            <div className="step-indicator">
              <span>
                <div className="step-number">1</div>
                <div className="step-text">Mục tiêu</div>
              </span>
              <span className="active">
                <div className="step-number">2</div>
                <div className="step-text">Thiết lập KPI</div>
              </span>
              <span>
                <div className="step-number">3</div>
                <div className="step-text">Hoàn Thành</div>
              </span>
            </div>

            <h2>Thiết lập KPI</h2>

            {subGoals.map((subGoal) => (
              <div key={subGoal} className="kpi-section">
                <details open={subGoal === "Giảng dạy"}>
                  <summary>
                    {subGoal}{" "}
                    <span className="goal-info">
                      Trọng số: {goalWeights[subGoal]}% Thời gian:{" "}
                      {subGoal === "Giảng dạy"
                        ? "30h/tuần"
                        : subGoal === "Nghiên cứu"
                        ? "8h/tuần"
                        : "4h/tuần"}
                    </span>
                  </summary>
                  <div className="task-list">
                    <div className="add-task">
                      <button
                        className="add-task-btn"
                        onClick={() => handleShowModal(subGoal)}
                      >
                        + Thêm nhiệm vụ
                      </button>
                    </div>
                    {tasks[subGoal].map((task, index) => (
                      <div key={index} className="task-item">
                        {editingTask &&
                        editingTask.subGoal === subGoal &&
                        editingTask.index === index ? (
                          // Hiển thị form chỉnh sửa
                          <>
                            <input
                              type="text"
                              value={editedTask.name}
                              onChange={(e) =>
                                handleInputChange("name", e.target.value)
                              }
                            />
                            <input
                              type="text"
                              value={editedTask.time}
                              onChange={(e) =>
                                handleInputChange("time", e.target.value)
                              }
                            />
                            <input
                              type="text"
                              value={editedTask.location}
                              onChange={(e) =>
                                handleInputChange("location", e.target.value)
                              }
                            />
                            <input
                              type="text"
                              value={editedTask.duration}
                              onChange={(e) =>
                                handleInputChange("duration", e.target.value)
                              }
                            />
                            <input
                              type="text"
                              value={editedTask.weight}
                              onChange={(e) =>
                                handleInputChange("weight", e.target.value)
                              }
                            />
                            <button
                              className="btn-save"
                              onClick={() => handleSaveTask(subGoal, index)}
                            >
                              Lưu
                            </button>
                            <button
                              className="btn-nope"
                              onClick={handleCancelEdit}
                            >
                              Hủy
                            </button>
                          </>
                        ) : (
                          // Hiển thị thông tin task
                          <>
                            <div className="task-details">
                              <div className="task-time">
                                Thời gian: {task.time}
                              </div>
                              <div className="task-location">
                                Địa điểm: {task.location}
                              </div>
                            </div>
                            <div className="task-name">{task.name}</div>
                            <div className="task-duration">
                              Đơn vị: {task.duration}
                            </div>
                            <div className="task-weight">
                              Trọng số:{" "}
                              {calculateWeight(subGoal, task.duration)}%
                            </div>

                            <div className="task-actions">
                              <button
                                className="btn-edit"
                                onClick={() => handleEditTask(subGoal, index)}
                              >
                                Sửa
                              </button>
                              <button
                                className="btn-delete"
                                onClick={() => handleDeleteTask(subGoal, index)}
                              >
                                Xóa
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </details>
                <Modal show={showModal} onHide={handleCloseModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Thêm nhiệm vụ mới cho {currentSubGoal}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group controlId="taskName">
                        {" "}
                        {/* Thêm controlId để kiểm soát form tốt hơn */}
                        <Form.Label>Tên nhiệm vụ</Form.Label>
                        <Form.Control
                          type="text"
                          value={newTask.name}
                          onChange={(e) =>
                            handleTaskInputChange("name", e.target.value)
                          }
                        />
                      </Form.Group>

                      <Form.Group controlId="taskTime">
                        <Form.Label>Thời gian</Form.Label>
                        <Form.Control
                          type="text"
                          value={newTask.time}
                          onChange={(e) =>
                            handleTaskInputChange("time", e.target.value)
                          }
                        />
                      </Form.Group>

                      <Form.Group controlId="taskLocation">
                        <Form.Label>Địa điểm</Form.Label>
                        <Form.Control
                          type="text"
                          value={newTask.location}
                          onChange={(e) =>
                            handleTaskInputChange("location", e.target.value)
                          }
                        />
                      </Form.Group>

                      <Form.Group controlId="taskDuration">
                        <Form.Label>Đơn vị</Form.Label>
                        <Form.Control
                          type="text"
                          value={newTask.duration}
                          onChange={(e) =>
                            handleTaskInputChange("duration", e.target.value)
                          }
                        />
                      </Form.Group>

                      <Form.Group controlId="taskWeight">
                        <Form.Label>Trọng số (%)</Form.Label>
                        <Form.Control
                          type="number"
                          value={newTask.weight}
                          onChange={(e) =>
                            handleTaskInputChange("weight", e.target.value)
                          }
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                      Hủy
                    </Button>
                    <Button variant="primary" onClick={handleAddTask}>
                      Thêm
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            ))}

            <div className="button-group">
              <button onClick={handleGoBack}>TRỞ LẠI</button>
              <button onClick={handleGoNext}>TIẾP TỤC</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPISetup;
