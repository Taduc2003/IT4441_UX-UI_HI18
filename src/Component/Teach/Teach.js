import Sidebar from "../Sidebar";
import "./Teach.css";
import TeachKpi from "./TeachKpi/TeachKpi";
const Teach = () => {
  return (
    <div className="overview-container">
      <Sidebar />
      <div className="overview-content">
        <TeachKpi />
      </div>
    </div>
  );
};
export default Teach;
