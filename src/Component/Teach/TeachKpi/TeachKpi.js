import React from "react";
import "./TeachKpi.css";
const TeachKpi = () => {
  return (
    <div class="contents">
      <div class="view-all">
        <div class="thoi-gian-day-du-kien">Thời gian dạy dự kiến</div>
        <img class="chevron-right" src="chevron-right0.svg" />
      </div>
      <div class="bill">
        <div class="details">
          <div class="date">
            <div class="ux-ui">UX-UI</div>
          </div>
          <div class="subscription-name">
            <div class="text">
              <div class="diadiem">Địa điểm: D9-401</div>
              <div class="ketthuc">Kết thúc: 08/07/2024</div>
            </div>
          </div>
        </div>
        <div class="amount">
          <div class="time">6h</div>
        </div>
      </div>
      <div class="bill">
        <div class="details">
          <div class="date">
            <div class="itss">ITSS</div>
          </div>
          <div class="subscription-name">
            <div class="text">
              <div class="diadiem">Địa điểm: D9-402</div>
              <div class="ketthuc">Kết thúc: 09/07/2024</div>
            </div>
          </div>
        </div>
        <div class="amount">
          <div class="time">6h</div>
        </div>
      </div>
    </div>
  );
};
export default TeachKpi;
