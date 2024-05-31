import React, { useState } from 'react';
import { Form, Button, Row, Col, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import './CreateKPI.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
const CreateKPI = () => {
    const navigate = useNavigate();
    const [goal, setGoal] = useState('gioi');
    const [subGoals, setSubGoals] = useState(['nghien-cuu', 'phuc-vu']);

    const handleGoalChange = (val) => setGoal(val);

    const handleSubGoalChange = (event) => {
        const value = event.target.value;
        setSubGoals(prev =>
            prev.includes(value) ? prev.filter(g => g !== value) : [...prev, value]
        );
    };

    const handleSubmit = () => {
        console.log('Selected Goal:', goal);
        console.log('Selected Sub Goals:', subGoals);
        navigate('/createKPI/setup', { state: { goal, subGoals } });
    };

    return (<div className="kpi-step1">
        <Sidebar />
        <div className="createKPIContainer">

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
                <Form.Group className="createKPIFormGroup">
                    <Form.Label>MỤC TIÊU MUỐN ĐẠT ĐƯỢC:</Form.Label>
                    <ToggleButtonGroup type="radio" name="goals" value={goal} onChange={handleGoalChange}>
                        <ToggleButton id="xuat-sac" value="xuat-sac" className="createKPIButton">Xuất sắc</ToggleButton>
                        <ToggleButton id="gioi" value="gioi" className="createKPIButton">Giỏi</ToggleButton>
                        <ToggleButton id="kha" value="kha" className="createKPIButton">Khá</ToggleButton>
                    </ToggleButtonGroup>
                </Form.Group>
                <Form.Group className="createKPIFormGroup">
                    <Form.Label>MỤC TIÊU CỤ THỂ:</Form.Label>
                    <Row>
                        <Col>
                            <Form.Check 
                                type="checkbox" 
                                id="giang-day" 
                                label="Giảng dạy"
                                value="giang-day"
                                checked={subGoals.includes('giang-day')}
                                onChange={handleSubGoalChange}
                                className="createKPICheckbox"
                            />
                            <Form.Check 
                                type="checkbox" 
                                id="nghien-cuu" 
                                label="Nghiên cứu"
                                value="nghien-cuu"
                                checked={subGoals.includes('nghien-cuu')}
                                onChange={handleSubGoalChange}
                                className="createKPICheckbox"
                            />
                            <Form.Check 
                                type="checkbox" 
                                id="phuc-vu" 
                                label="Phục vụ"
                                value="phuc-vu"
                                checked={subGoals.includes('phuc-vu')}
                                onChange={handleSubGoalChange}
                                className="createKPICheckbox"
                            />
                        </Col>
                        <Col>
                            <Form.Check 
                                type="checkbox" 
                                id="danh-gia" 
                                label="Đánh giá từ sinh viên"
                                value="danh-gia"
                                checked={subGoals.includes('danh-gia')}
                                onChange={handleSubGoalChange}
                                className="createKPICheckbox"
                            />
                            <Form.Check 
                                type="checkbox" 
                                id="diem-a" 
                                label="Số lượng sinh viên đạt điểm A"
                                value="diem-a"
                                checked={subGoals.includes('diem-a')}
                                onChange={handleSubGoalChange}
                                className="createKPICheckbox"
                            />
                            <Form.Check 
                                type="checkbox" 
                                id="di-hoc" 
                                label="Tỉ lệ đi học của sinh viên"
                                value="di-hoc"
                                checked={subGoals.includes('di-hoc')}
                                onChange={handleSubGoalChange}
                                className="createKPICheckbox"
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="createKPIFormGroup">
                    <Button variant="primary" onClick={handleSubmit} className="createKPIButton">TIẾP TỤC</Button>
                </Form.Group>
            </Form>
        </div>
        </div>
    );
};

export default CreateKPI;
