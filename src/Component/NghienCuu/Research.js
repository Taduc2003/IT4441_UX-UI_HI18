import Sidebar from "../Sidebar";
import "./Research.css";

import Goals from "./Goals/Goals"
import ChartComponent from "./ColumnChart/ChartComponet";

const Admin = () => {
  return (
    <div className="overview-container">
      <Sidebar />
      <div className="content">
       <Goals/> 
       <ChartComponent/>
      </div>
    </div>
  );
};
export default Admin;
