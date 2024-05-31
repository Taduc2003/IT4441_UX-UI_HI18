import React from "react";
import "./TaskDiagram.css";
const TaskDiagram = () => {
  return (
    <div class="statistics-details">
      <div class="header">
        <div class="frame-40384">
          <div className="s-gi-gi-ng-d-y-trong-tu-n">Số giờ giảng dạy</div>
          <select className="time-selector">
            <option value="week">Tuần</option>
            <option value="month">Tháng</option>
            <option value="year">Năm</option>
          </select>
        </div>
        <div class="indicator">
          <div class="this-week">
            <div class="rectangle-69"></div>
            <div class="tu-n-n-y">Tuần này</div>
          </div>
          <div class="last-week">
            <div class="rectangle-692"></div>
            <div class="tu-n-tr-c">Tuần trước</div>
          </div>
        </div>
        <div class="indicator2"></div>
      </div>
      <div class="graph">
        <div class="line">
          <div class="_8">8</div>
          <div class="line-7"></div>
        </div>
        <div class="line">
          <div class="_6">6</div>
          <div class="line-8"></div>
        </div>
        <div class="line">
          <div class="_4">4</div>
          <div class="line-9"></div>
        </div>
        <div class="line">
          <div class="_2">2</div>
          <div class="line-10"></div>
        </div>
        <div class="line">
          <div class="_0">0</div>
          <div class="line-11"></div>
        </div>
        <div class="bar">
          <div class="bar2">
            <div class="bar3">
              <div class="rectangle-53"></div>
              <div class="rectangle-54"></div>
            </div>
            <div class="_17-sun">18 Mon</div>
          </div>
          <div class="bar4">
            <div class="bar3">
              <div class="rectangle-532"></div>
              <div class="rectangle-542"></div>
            </div>
            <div class="_17-sun">19 Tue</div>
          </div>
          <div class="bar5">
            <div class="bar3">
              <div class="rectangle-532"></div>
              <div class="rectangle-543"></div>
            </div>
            <div class="_17-sun">20 Wed</div>
          </div>
          <div class="bar6">
            <div class="bar3">
              <div class="rectangle-533"></div>
              <div class="rectangle-544"></div>
            </div>
            <div class="_17-sun">21 Thu</div>
          </div>
          <div class="bar7">
            <div class="bar8">
              <div class="rectangle-534"></div>
            </div>
            <div class="_17-sun">22 Fri</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaskDiagram;
