import React, { useState } from "react";
import Sidebar from "../Sidebar";
import "./Research.css";

import ChartComponent from "./ColumnChart/ChartComponet";
import DetailGoal from "./detailGoal2/DetailGoal";
import Header from "../header/Header";
import UploadFileOrImg from "./uploadFile/UploadFileOrImg";
import GoalBar from "./Goals/GoalBar";

const Admin = () => {
    const [uploadVisible, setUploadVisible] = useState(false);
    const toggleUpload = () => {
      setUploadVisible(!uploadVisible);
    };
    const data1 = {
      goal: 'Mục tiêu mức 1',
      title: 'Số giờ cần nghiên cứu trong kỳ',
      hocki: 'Kỳ 2023.1',
      realAverage: 10,
      needAverage: 96,
  };
  const data2 = {
      goal: 'Mục tiêu mức 2',
      title: 'Số bài báo nghiên cứu đã công bố trong kỳ',
      hocki: 'Kỳ  2023.1',
      realAverage: 1,
      needAverage: 3,
  };
  const data3 = {
      goal: 'Mục tiêu mức 3',
      title: 'Số bài báo được đâng trên tạp chí uy tín trong kỳ',
      hocki: 'Kỳ  2023.1',
      realAverage: 0,
      needAverage: 2,
  };
    const researchChart ={
      typee : 'nghiên cứu',
    }

  const researchDetail = {
    typee: "bài báo nghiên cứu",
    semester: "2023.1",
    name1:
      "Ảnh hưởng của hằng số thời gian T của mạch điều chỉnh đến độ chính xác gia công trên máy CNC",
    status1: "Chưa công bố",
    name2: "Phương pháp tính toán, thiết kế bộ truyền bánh răng –thanh răng",
    status2: "Đã công bố",
  };
  return (
    <div className="overview-container-research">
      <Sidebar />
      <div className ="main-content-research">
          <Header />
          <h1 className="titles-research">Nghiên cứu</h1>
          <button className="upload-research-button" onClick={toggleUpload}>Tải minh chứng</button>
          <GoalBar data1={data1} data2={data2} data3={data3} />
          <ChartComponent data = {researchChart}/>
          <DetailGoal data = {researchDetail}/>
        {uploadVisible && <UploadFileOrImg onClose={toggleUpload} />}
      </div>
    </div>  
  );
};
export default Admin;
