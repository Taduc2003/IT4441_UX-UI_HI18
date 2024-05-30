import Sidebar from "../Sidebar";
import "./Teach.css";
import TeachKpi from "./TeachKpi/TeachKpi.js";
import TaskList from "./TastList/TaskList.js";
import TaskDiagram from "./TaskDiagram/TaskDiagram.js";

const Teach = () => {
  return (
    <>
      <div className="overview-container">
        {/* <div className="side-bar">
          <Sidebar />
        </div> */}
        <Sidebar />
        <div className="overview-content">
          <TeachKpi />
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
    </>
  );
};

export default Teach;
