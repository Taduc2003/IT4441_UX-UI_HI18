import Header from "../header/Header";
import Sidebar from "../Sidebar";
import Graph from "./Graph/Graph";
import NotificationBar from "./notificationBar/NotificationBar";
import "./Overview.css"; // Import the CSS file for Admin component
import Schedule from "./Schedule/Schedule";
const Admin = () => {
  return (
    <div className="admin-container">
      <Sidebar />

      <div className="main-content">
        <Header />
        <h1 className="overview-heading">Tổng quan</h1>

        <div className="notification-bar-wrapper">
          <NotificationBar />
        </div>

        <div className="graph-wrapper">
          <Graph />
        </div>

        <div className="calendar">
          <Schedule />
        </div>
      </div>
    </div>
  );
};

export default Admin;
