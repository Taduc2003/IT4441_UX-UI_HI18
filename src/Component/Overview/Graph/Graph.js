import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Graph.css";
import CircleGraph from "./CircleGraph";

const Graph = () => {
  const navigate = useNavigate();
  const [selectedGraph, setSelectedGraph] = useState("teach");

  const handleTeach = () => {
    navigate("/teach");
  };

  const handleResearch = () => {
    navigate("/research");
  };

  const handleService = () => {
    navigate("/service");
  };

  return (
    <div>
      {window.innerWidth < 600 ? (
        <div className="graphs-container">
          <div className="selector-container">
            <select className="selector"
              value={selectedGraph}
              onChange={(e) => setSelectedGraph(e.target.value)}
            >
              <option className="teach-option" value="teach">Giảng dạy</option>
              <option className="research-option " value="research">Nghiên cứu</option>
              <option className="service-option " value="service">Phục vụ</option>
            </select>
          </div>
          {selectedGraph === "teach" && (
            <div className="teach-box" onClick={handleTeach}>
              <div className="teach-graph-image">
                <CircleGraph percentage={40} color={"#F83362"} />
              </div>
              <div className="content">
                <h2>Giảng dạy</h2>
                <p>Xem chi tiết</p>
              </div>
            </div>
          )}
          {selectedGraph === "research" && (
            <div className="research-box" onClick={handleResearch}>
              <div className="reseach-graph-image">
                <CircleGraph percentage={60} color={"#0753BF"} />
              </div>
              <div className="content">
                <h2>Nghiên cứu</h2>
                <p>Xem chi tiết</p>
              </div>
            </div>
          )}
          {selectedGraph === "service" && (
            <div className="serve-box" onClick={handleService}>
              <div className="serve-graph-image">
                <CircleGraph percentage={60} color={"#DF9500"} />
              </div>
              <div className="content">
                <h2>Phục vụ</h2>
                <p>Xem chi tiết</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="graphs-container">
          <div className="teach-box" onClick={handleTeach}>
            <div className="teach-graph-image">
              <CircleGraph percentage={40} color={"#F83362"} />
            </div>
            <div className="content">
              <h2>Giảng dạy</h2>
              <p>Xem chi tiết</p>
            </div>
          </div>

          <div className="research-box" onClick={handleResearch}>
            <div className="reseach-graph-image">
              <CircleGraph percentage={60} color={"#0753BF"} />
            </div>
            <div className="content">
              <h2>Nghiên cứu</h2>
              <p>Xem chi tiết</p>
            </div>
          </div>

          <div className="serve-box">
            <div className="serve-graph-image" onClick={handleService}>
              <CircleGraph percentage={60} color={"#DF9500"} />
            </div>
            <div className="content">
              <h2>Phục vụ</h2>
              <p>Xem chi tiết</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Graph;
