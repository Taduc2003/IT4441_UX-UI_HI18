import React, { useState } from "react";
import "./GoalBar.css";
import { FaRunning, FaCheckCircle, FaChartLine } from "react-icons/fa";
import Goals from "./Goals";
import Goals2 from "./Goals2";

const GoalBar = ({ data1, data2, data3 }) => {
  const [selectedGoal, setSelectedGoal] = useState("goal1");
  
  return (
    <div>
      {window.innerWidth < 600 ? (
        <div className="goals-container">
          <div className="selector-container-goals">
            <select className="selector-goals"
              value={selectedGoal}
              onChange={(e) => setSelectedGoal(e.target.value)} >
              <option value="goal1">Mục tiêu 1</option>
              <option value="goal2">Mục tiêu 2</option>
              <option value="goal3">Mục tiêu 3</option>
            </select>
          </div>
          {selectedGoal === "goal1" && (
            <div className="goal-box">
              <Goals2 data ={data1}/> 
            </div>
                
          )}
          {selectedGoal === "goal2" && (
            <div className="goal-box">
              <Goals2 data ={data2}/> 
            </div>
          )}
          {selectedGoal === "goal3" && (
            <div className="goal-box">
              <Goals2 data ={data3}/> 
            </div>
          )}
        </div>
      ) : (
        <div className="goals-container">
            <Goals data ={data1}/> 
            <Goals data ={data2}/> 
            <Goals data ={data3}/>
        </div>
      )}
    </div>
  );
};

export default GoalBar;