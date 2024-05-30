import "./TaskList.css";
const TaskList = () => {
  return (
    <div class="content">
      <div class="menu-tab">
        <div class="tab active">
          <div class="tab-text">Đã Hoàn Thành</div>
        </div>
        <div class="tab">
          <div class="tab-text">Quá Hạn</div>
        </div>
        <div class="tab">
          <div class="tab-text">Chưa Hoàn Thành</div>
        </div>
      </div>
      <div class="item-list">
        <div class="item">
          <div class="item-details">
            <div class="item-title">Giảng dạy ITSS</div>
            <div class="item-date">20/05/2024</div>
          </div>
        </div>
        <div class="item">
          <div class="item-details">
            <div class="item-title">Tạo form UX-UI</div>
            <div class="item-date">20/05/2024</div>
          </div>
        </div>
        <div class="item">
          <div class="item-details">
            <div class="item-title">Giảng dạy môn ITSS</div>
            <div class="item-date">19/05/2024</div>
          </div>
        </div>
        <div class="item">
          <div class="item-details">
            <div class="item-title">Chấm bài ITSS</div>
            <div class="item-date">18/05/2024</div>
          </div>
        </div>
        <div class="item">
          <div class="item-details">
            <div class="item-title">Giảng dạy ITSS</div>
            <div class="item-date">18/05/2024</div>
          </div>
        </div>
        <div class="item">
          <div class="item-details">
            <div class="item-title">Giảng dạy môn ITSS</div>
            <div class="item-date">17 May 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaskList;
