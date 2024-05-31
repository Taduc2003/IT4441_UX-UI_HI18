import React from "react";
import "./Graph.css";
import CircleGraph from "./CircleGraph";

const Graph = () => {
  return (
    <div className="graphs-container">
      <div className="teach-box">
        <div className="teach-graph-image">
          <CircleGraph percentage={40} color={'#F83362'} />
        </div>
        <div className="content">
          <h2>Giảng dạy</h2>
          <p>Xem chi tiết</p>
        </div>
      </div>

      <div className="research-box">
        <div className="reseach-graph-image">
          <CircleGraph percentage={60} color={'#0753BF'} />
        </div>
        <div className="content">
          <h2>Nghiên cứu</h2>
          <p>Xem chi tiết</p>
        </div>
      </div>

      <div className="serve-box">
        <div className="serve-graph-image">
          <CircleGraph percentage={60} color={'#DF9500'} />
        </div>
        <div className="content">
          <h2>Phục vụ</h2>
          <p>Xem chi tiết</p>
        </div>
      </div>
    </div>
  )
};

export default Graph;