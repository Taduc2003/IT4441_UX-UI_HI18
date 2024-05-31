import Sidebar from "../Sidebar";
import "./Research.css";

import Goals from "./Goals/Goals"
import ChartComponent from "./ColumnChart/ChartComponet";
import DetailGoal from "./detailGoal2/DetailGoal";
import Header from "../header/Header";
import UploadFileOrImg from "./uploadFile/UploadFileOrImg";

const Admin = () => {
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
      typee : 'bài báo nghiên cứu',
      semester: '2023.1',
      name1: 'Ảnh hưởng của hằng số thời gian T của mạch điều chỉnh đến độ chính xác gia công trên máy CNC',
      status1: 'Chưa công bố',
      name2: 'Phương pháp tính toán, thiết kế bộ truyền bánh răng –thanh răng',
      status2: 'Đã công bố',
    }
  return (
    <div className="overview-container">
      <Sidebar />
      <div className ="content-doc">
      <Header />
      <div className="titles">Nghiên cứu</div>
        <div className="ngang">
        <Goals data ={data1}/> 
        <ChartComponent data = {researchChart}/>
        </div>
        <div className="ngang">
        <Goals data ={data2}/> 
        <DetailGoal data = {researchDetail}/>
        </div>
        <div className="ngang">
        <Goals data ={data3}/> 
        <UploadFileOrImg/>
        </div>
      </div>
    </div>
  );
};
export default Admin;
