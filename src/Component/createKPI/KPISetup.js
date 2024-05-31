// KPISetup.jsx
import React from 'react';
import './KPISetup.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
const KPISetup = () => {
    const navigate = useNavigate();
  const subGoals = ['Giảng dạy', 'Nghiên cứu', 'Phục vụ']; 

  const tasks = {
    'Giảng dạy': [
      { name: 'Dạy UIUX', time: 'T2+T6 7-9', location: '09-401', duration: '2.15h', weight: '50%' },
      { name: 'ITSS', time: 'T5-T6 1-4', location: '09-401', duration: '3h', weight: '50%' },
    ],
    'Nghiên cứu': [],
    'Phục vụ': []
  };
  const handleGoBack = () => {navigate('/createKPI')};
  const handleGoNext = () => {navigate('/createKPI/success')};
  return (<div className="kpi-step1">
    <Sidebar />
    <div className="kpi-step">
        
    <div className="step-indicator">
        <span >
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
          <details open={subGoal === 'Giảng dạy'}>
            <summary>{subGoal} <span className="goal-info">Trọng số: {subGoal === 'Giảng dạy' ? '30%' : subGoal === 'Nghiên cứu' ? '30%' : '10%'}  Thời gian: {subGoal === 'Giảng dạy' ? '30h/tuần' : subGoal === 'Nghiên cứu' ? '8h/tuần' : '4h/tuần'}</span></summary>
            <div className="task-list">
              <div className="add-task">
                <button className="add-task-btn">+ Thêm nhiệm vụ</button>
              </div>
              {tasks[subGoal].map((task, index) => (
                <div key={index} className="task-item">
                  <div className="task-name">{task.name}</div>
                  <div className="task-details">
                      <div className="task-time">Thời gian: {task.time}</div>
                      <div className="task-location">Địa điểm: {task.location}</div>
                  </div>
                  <div className="task-duration">Thời lượng: {task.duration}</div>
                  <div className="task-weight">Trọng số: {task.weight}</div>
                </div>
              ))}
            </div>
          </details>
        </div>
      ))}

      <div className="button-group">
      <button onClick={handleGoBack}>TRỞ LẠI</button>
      <button onClick={handleGoNext}>TIẾP TỤC</button>
      </div>
    </div></div>
  );
};

export default KPISetup;
