import React, { useState } from "react";
import Sidebar from "../Sidebar";
import "./Service.css";

import GoalBar from "../NghienCuu/Goals/GoalBar";
import ChartComponent from "../NghienCuu/ColumnChart/ChartComponet";
import DetailGoal from "../NghienCuu/detailGoal2/DetailGoal";
import Header from "../header/Header";
import UploadFileOrImg from "../NghienCuu/uploadFile/UploadFileOrImg";
import TaskList from "./TastListService/TaskListService";

const Admin = () => {
  const data1 = {
    goal: "Mục tiêu mức 1",
    title: "Số giờ cần phục vụ trong kỳ",
    hocki: "Kỳ 2023.1",
    realAverage: 10,
    needAverage: 64,
  };
  const data2 = {
    goal: "Mục tiêu mức 2",
    title: "Số hoạt đông phục vụ đã tham gia trong kỳ",
    hocki: "Kỳ  2023.1",
    realAverage: 1,
    needAverage: 2,
  };
  const data3 = {
    goal: "Mục tiêu mức 3",
    title: "Số lần tham gia ban tổ chức của hoạt động trong kỳ",
    hocki: "Kỳ  2023.1",
    realAverage: 0,
    needAverage: 2,
  };
  const serviceChart = {
    typee: "phục vụ",
  };

  const serviceDetail = {
    typee: "hoạt động phục vụ tham gia",
    semester: "2023.1",
    name1: "Hoạt động tình nghiện vì trẻ em nghèo ",
    status1: "Chưa hoàn thành",
    name2: 'Talk-show: "Nóng lên toàn cầu"',
    status2: "Đã hoàn thành",
  };
  const [uploadVisible, setUploadVisible] = useState(false);
  const toggleUpload = () => {
    setUploadVisible(!uploadVisible);
  };
  return (
    <div className="admin-container">
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="main-content">
        <Sidebar />
        <div className="service-content">
          <h1 className="service-heading">Phục vụ</h1>
          <div className="service-graph">
            <button className="upload-service-button" onClick={toggleUpload}>
              Tải minh chứng
            </button>
            <GoalBar data1={data1} data2={data2} data3={data3} />
            <div className="content-ngang">
              <div className="content-doc">
                <ChartComponent data={serviceChart} />
                <DetailGoal data={serviceDetail} />
              </div>
              <div className="task-list">
              <TaskList/>
              </div>
            </div>
            {uploadVisible && <UploadFileOrImg onClose={toggleUpload} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admin;
