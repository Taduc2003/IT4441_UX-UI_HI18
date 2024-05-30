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
      <Sidebar />
      <div className="main-content">
        <Header />
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
  );
};

export default Teach;
