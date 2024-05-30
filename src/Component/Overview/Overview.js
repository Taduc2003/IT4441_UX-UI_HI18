import Header from "../header/Header";
import Sidebar from "../Sidebar";
import Graph from "./Graph/Graph";
import NotificationBar from "./notificationBar/NotificationBar";
import "./Overview.css"; // Import the CSS file for Admin component

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="side-bar">
        <Sidebar />
      </div>

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
          {/* chú bảo nhét vào đây */}
        </div>
      </div>
    </div>
  );
};

export default Admin;
