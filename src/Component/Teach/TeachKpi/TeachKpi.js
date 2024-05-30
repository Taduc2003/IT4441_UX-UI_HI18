import React from "react";
import "./TeachKpi.css";
import diagram from "../../../img/frame-12450.jpg";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
const TeachKpi = () => {
  return (
    <div class="contents">
      <div className="kpi-schedule-container">
        <div className="teach-schedule">
          <div class="view-all">
            <div class="thoi-gian-day-du-kien">Thời gian dạy dự kiến</div>
            <IoChevronForward class="chevron-right" />
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
        <div class="bi-u-d-b-o-ti-n-t-ng-kpi">
          <div class="frame-1243">
            <div class="c-c-m-c-kpi">Các mức độ KPI</div>
            <div class="frame-1242">
              <div class="frame-1240">
                <div class="frame-1239">
                  <div class="rectangle-194"></div>
                  <div class="ng-ti-n">Đúng tiến độ</div>
                </div>
                <div class="frame-1238">
                  <div class="rectangle-1942"></div>
                  <div class="kh-ng-t-m-c-ti-u">Không đạt mục tiêu</div>
                </div>
                <div class="frame-12402">
                  <img class="purty-wood" src="purty-wood0.png" />
                  <div class="ch-m-ti-n">Chậm tiến độ</div>
                </div>
              </div>
              <div class="frame-1237">
                <div class="beige-tiles"></div>
                <div class="d-b-o">Dự báo</div>
              </div>
              <div class="frame-1241">
                <IoChevronBackOutline class="arrow-back-ios-new" />
                <IoChevronForward class="arrow-forward-ios" />
              </div>
            </div>
          </div>
          <div class="frame-1247">
            <div class="frame-1246">
              <div class="frame-1244">
                <div class="_10-h">10h</div>
                <div class="_5-h">5h</div>
                <div class="_1-h-30">1h30</div>
                <div class="_0">0</div>
              </div>
              <img class="frame-1245" src={diagram} />
            </div>
            <div class="frame-1111">
              <div class="frame-1109">
                <div class="th-2">Thứ 2</div>
              </div>
              <div class="frame-1110">
                <div class="th-3">Thứ 3</div>
              </div>
              <div class="frame-11112">
                <div class="th-4">Thứ 4</div>
              </div>
              <div class="frame-1112">
                <div class="th-5">Thứ 5</div>
              </div>
              <div class="frame-1113">
                <div class="th-6">Thứ 6</div>
              </div>
              <div class="frame-1114">
                <div class="th-7">Thứ 7</div>
              </div>
              <div class="frame-1115">
                <div class="ch-nh-t">Chủ Nhật</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachKpi;
