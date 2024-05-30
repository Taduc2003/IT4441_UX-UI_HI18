import React from "react";
import Sidebar from "../Sidebar";
import "./Teach.css";
import TeachKpi from "./TeachKpi/TeachKpi.js";
import TaskList from "./TastList/TaskList.js"; // Fixed typo in folder name
import TaskDiagram from "./TaskDiagram/TaskDiagram.js";
import Header from "../header/Header";
import Graph from "../Overview/Graph/Graph.js";
import NotificationBar from "../Overview/notificationBar/NotificationBar.js";

const Teach = () => {
  return (
    <>
      <div className="overview-container">
        <div className="side-bar">
          <Sidebar />
        </div>
        <div className="overview-content">
          <TeachKpi />
        </div>
        <div className="task-container">
          <div className="task-list">
            <TaskList />
          </div>
          <div className="task-diagram">
            <TaskDiagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teach;
