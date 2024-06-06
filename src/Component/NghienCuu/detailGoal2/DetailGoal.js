import React, { useState } from "react";
import "./DetailGoal.css";

const DetailGoal = (props) => {
    const [viewAll, setViewAll] = useState(false);

    const handleViewAll = () => {
        setViewAll(!viewAll);
    };

    return (
        <div className="detail-container">
            <div className="detail-title">Các {props.data.typee} trong kỳ</div>
            <div className="detail-wrapper">
                <div className="bills">
                    <div className="detailss">
                        <div className="dates">
                            <div className="semester">{props.data.semester} 
                            </div>
                        </div>
                        <div className="subscription-names">
                            <div className="texts">
                                <div className="tenbaibao">{props.data.name1}</div>
                                <div className="ketthuc">Kết thúc: 08/07/2024</div>
                            </div>
                        </div>
                    </div>
                    <div className="amounts">
                        <div className="trangthai">{props.data.status1}</div>
                    </div>
                </div>
                {viewAll && (
                    <div className="bills">
                        <div className="detailss">
                            <div className="dates">
                                <div className="semester">{props.data.semester}</div>
                            </div>
                            <div className="subscription-names">
                                <div className="texts">
                                    <div className="tenbaibao">{props.data.name2}</div>
                                    <div className="ketthucs">Kết thúc: 09/07/2024</div>
                                </div>
                            </div>
                        </div>
                        <div className="amounts">
                            <div className="trangthai">{props.data.status2}</div>
                        </div>
                    </div>
                )}  
            </div>
            <button className="view-all-button" onClick={handleViewAll}>
                    {viewAll ? "Thu gọn" : "Xem tất cả"}
                </button>  
        </div>
    );
};

export default DetailGoal;
