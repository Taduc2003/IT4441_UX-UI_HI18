import React from "react";
import Sidebar from "../Sidebar";
import "./Teach.css";
import TeachKpi from "./TeachKpi/TeachKpi.js";
import TaskList from "./TastList/TaskList.js"; // Fixed typo in folder name
import TaskDiagram from "./TaskDiagram/TaskDiagram.js";
import Header from "../header/Header";
import Graph from "../Overview/Graph/Graph.js";
import NotificationBar from "../Overview/notificationBar/NotificationBar.js";
import SpecialTime from "./SpecialTime/SpecialTime.js";
const Teach = () => {
  return (
    <div className="teach-container">
      <div className="header-wrapper">
        <Header />
      </div>

      <div className="main-content">
        <Sidebar />
        <div className="teach-content">
          <h1 className="teach-heading">Giảng dạy</h1>
          <div className="teach-kpi">
            <TeachKpi />
          </div>
          <div className="task-container">
            <div className="task-list">
              <TaskList />
            </div>
            <div className="task-diagram">
              <TaskDiagram />
              <SpecialTime />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teach;
