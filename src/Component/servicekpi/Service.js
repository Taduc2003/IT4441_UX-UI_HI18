import Sidebar from "../Sidebar";
import "./Service.css";

import Goals from "../NghienCuu/Goals/Goals";
import ChartComponent from "../NghienCuu/ColumnChart/ChartComponet";
import DetailGoal from "../NghienCuu/detailGoal2/DetailGoal";
import Header from "../header/Header";
import UploadFileOrImg from "../NghienCuu/uploadFile/UploadFileOrImg";

const Admin = () => {
    const data1 = {
        goal: 'Mục tiêu mức 1',
        title: 'Số giờ cần phục vụ trong kỳ',
        hocki: 'Kỳ 2023.1',
        realAverage: 10,
        needAverage: 64,
    };
    const data2 = {
        goal: 'Mục tiêu mức 2',
        title: 'Số hoạt đông phục vụ đã tham gia trong kỳ',
        hocki: 'Kỳ  2023.1',
        realAverage: 1,
        needAverage: 2,
    };
    const data3 = {
        goal: 'Mục tiêu mức 3',
        title: 'Số hoạt động phục vụ tham gia với vai trò ban tổ chức trong kỳ',
        hocki: 'Kỳ  2023.1',
        realAverage: 0,
        needAverage: 2,
    };
    const serviceChart ={
        typee : 'phục vụ',
      }
  
      const serviceDetail = {
        typee : 'hoạt động phục vụ tham gia',
        semester: '2023.1',
        name1: 'Hoạt động tình nghiện vì trẻ em nghèo ',
        status1: 'Đã hoàn thành',
        name2: 'Talk-show: "Thất bại là thử thách"',
        status2: 'Chưa hoàn thành',
      }

  return (
    <div className="overview-container">
      <Sidebar />
      <div className ="content-doc">
      <Header />
      <div className="titles">Phục vụ</div>
        <div className="ngang">
        <Goals data ={data1}/> 
        <ChartComponent data = {serviceChart}/>
        </div>
        <div className="ngang">
        <Goals data ={data2}/> 
        <DetailGoal data = {serviceDetail}/>
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
