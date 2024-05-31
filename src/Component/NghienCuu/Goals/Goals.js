import React from "react";
import "./Goals.css";
import "./GoalsGuide.css";
import GaugeChartComponent from "./GaugesChart";

const Goals = (props) => {
    return (
        <div className="goals">
            <div className="text-wrapper">{props.data.goal}</div>
            <div className="content-goal">
                <header className="header">
                    <div className="frame">
                        <div className="theo-tuan">
                        {props.data.title}</div>
                        {/* <img className="chevron-down" src="img/chevron-down.svg" alt="Chevron Down"/> */}
                    </div>
                    <div className="k">{props.data.hocki}</div>
                </header>
                <div className="details">
                    <div className="left-content">
                        <div className="div-wrapper">
                            <div className="text">
                                <div className="div">Trung bình cần đạt</div>
                                <div className="element-gi">{props.data.needAverage}</div>
                            </div>
                        </div>
                        <div className="div-wrapper">
                            <div className="text">
                                <div className="div">Thực tế đã đạt</div>
                                <div className="element-gi">{props.data.realAverage}</div>
                            </div>
                        </div>
                    </div>
                    <div className="target-vs">
                        <GaugeChartComponent 
                            real={props.data.realAverage} 
                            need={props.data.needAverage}
                            />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Goals;
