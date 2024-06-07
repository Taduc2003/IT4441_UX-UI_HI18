import React, { useState } from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import "./CreateKPI.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react"; // Thêm useCallback
import Header from "../header/Header";

const CreateKPI = () => {
  const navigate = useNavigate();
  const [goal, setGoal] = useState("gioi");
  const [subGoals, setSubGoals] = useState([
    "Nghiên cứu",
    "Phục vụ",
    "Giảng dạy",
  ]);
  const subGoalsLabels = {
    giang_day: "Giảng dạy",
    nghien_cuu: "Nghiên cứu",
    phuc_vu: "Phục vụ",
    danh_gia: "Đánh giá từ sinh viên",
    diem_a: "Số lượng sinh viên đạt điểm A",
    di_hoc: "Tỉ lệ đi học của sinh viên",
  };
  const handleGoalChange = (value) => {
    setGoal(value);
  };

  const handleSubGoalChange = (event) => {
    const value = event.target.value;
    setSubGoals((prev) =>
      prev.includes(value) ? prev.filter((g) => g !== value) : [...prev, value]
    );
  };

  const handleSubmit = () => {
    console.log("Selected Goal:", goal);
    console.log("Selected Sub Goals:", subGoals);
    navigate("/kpisetup", { state: { goal, subGoals } });
  };
  const [newSubGoal, setNewSubGoal] = useState(""); // State để lưu nội dung nhiệm vụ mới

  const handleAddSubGoal = () => {
    if (newSubGoal.trim() !== "" && !subGoals.includes(newSubGoal)) {
      setSubGoals([...subGoals, newSubGoal]);
      setNewSubGoal(""); // Xóa nội dung input sau khi thêm
    }
  };
  const [excelFile, setExcelFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setExcelFile(acceptedFiles[0]);
    }
  }, []); // <- Thêm dependency array rỗng

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
  });

  return (
    <div className="kpi-step1">
      <div className="header-wrapper">
        <Header />
      </div>

      <div className="createKPIContainer">
        <Sidebar />
        <div className="createKPI-content">
          <div className="step-indicator">
            <span className="active">
              <div className="step-number">1</div>
              <div className="step-text">Mục tiêu</div>
            </span>
            <span>
              <div className="step-number">2</div>
              <div className="step-text">Thiết lập KPI</div>
            </span>
            <span>
              <div className="step-number">3</div>
              <div className="step-text">Hoàn Thành</div>
            </span>
          </div>

          <Form>
            <Form.Group className="createKPIFormGroup">
              <Form.Label>GIẢNG VIÊN: ĐỖ QUỐC BẢO</Form.Label>
            </Form.Group>
            <Form.Group className="createKPIFormGroup">
              <Form.Label>KỲ HỌC: 20232</Form.Label>
            </Form.Group>
            <Form.Group className="createKPIFormGroup ">
              {" "}
              {/* Căn giữa Row */}
              <Form.Label>MỤC TIÊU MUỐN ĐẠT ĐƯỢC:</Form.Label>
              <Row className="justify-content-center">
                {" "}
                {/* Căn giữa các nút trong Row */}
                <Col xs="auto">
                  <Button
                    id="xuat-sac"
                    value="xuat-sac"
                    className={`createKPIButton goal ${
                      goal === "xuat-sac" ? "active" : ""
                    }`}
                    onClick={() => handleGoalChange("xuat-sac")}
                  >
                    Xuất sắc
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button
                    id="gioi"
                    value="gioi"
                    className={`createKPIButton goal ${
                      goal === "gioi" ? "active" : ""
                    }`}
                    onClick={() => handleGoalChange("gioi")}
                  >
                    Giỏi
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button
                    id="kha"
                    value="kha"
                    className={`createKPIButton goal ${
                      goal === "kha" ? "active" : ""
                    }`}
                    onClick={() => handleGoalChange("kha")}
                  >
                    Khá
                  </Button>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="createKPIFormGroup">
              <Form.Group className="BigGoal">
                <Form.Label>GỢI Ý MỤC TIÊU:</Form.Label>
                <Row>
                  {Object.keys(subGoalsLabels).map((subGoalId) => (
                    <Col key={subGoalId} xs={12} md={6}>
                      <Form.Check
                        type="checkbox"
                        id={subGoalId}
                        label={subGoalsLabels[subGoalId]} // Sử dụng subGoalsLabels để lấy label
                        value={subGoalsLabels[subGoalId]} // Sử dụng subGoalsLabels để lấy label
                        checked={subGoals.includes(subGoalsLabels[subGoalId])} // Kiểm tra dựa trên label
                        onChange={handleSubGoalChange}
                        className="createKPICheckbox"
                      />
                    </Col>
                  ))}
                </Row>
                <Form.Label>THÊM MỤC TIÊU:</Form.Label>
                <Row>
                  <Col>
                    <InputGroup className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Nhập nhiệm vụ mới"
                        value={newSubGoal}
                        onChange={(e) => setNewSubGoal(e.target.value)}
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={handleAddSubGoal}
                      >
                        Thêm
                      </Button>
                    </InputGroup>
                  </Col>
                </Row>
                <Form.Label>MỤC TIÊU ĐÃ THIẾT LẬP:</Form.Label>
                <Row>
                  {subGoals.map((subGoal, index) => (
                    <Col key={index}>
                      {" "}
                      {/* Truyền index làm key cho mỗi Form.Check */}
                      <Form.Check
                        type="checkbox"
                        id={subGoal}
                        label={subGoal}
                        value={subGoal}
                        checked={subGoals.includes(subGoal)}
                        onChange={handleSubGoalChange}
                        className="createKPICheckbox"
                      />
                    </Col>
                  ))}
                </Row>
              </Form.Group>
            </Form.Group>
            <Form.Group className="createKPIFormGroup">
              <Form.Label>TẢI LÊN FILE KPI MỤC TIÊU:</Form.Label>
              <div
                {...getRootProps()}
                className={`dropzone ${isDragActive ? "active" : ""}`}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Thả file vào đây ...</p>
                ) : (
                  <p>Kéo và thả file Excel vào đây, hoặc click để chọn file</p>
                )}
                {excelFile && <p>File đã chọn: {excelFile.name}</p>}
              </div>
            </Form.Group>
            <Form.Group className="createKPIFormGroup">
              <Button
                variant="primary"
                onClick={handleSubmit}
                className="createButton"
              >
                TIẾP TỤC
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateKPI;
