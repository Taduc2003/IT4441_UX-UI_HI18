import React from "react";
import "./DetailGoal.css";
const DetailGoal = (props) => {
    
  return (
    <div className = "top-contents">
        <div class="title">Các {props.data.typee} trong kỳ</div>
        <div class="noidung">
            <div class="xemtatca">
                <div class="bills">
                    <div class="detailss">
                        <div class="dates">
                            <div class="semester">{props.data.semester}</div>
                        </div>
                        <div class="subscription-names">
                            <div class="texts">
                                <div class="tenbaibao">{props.data.name1}</div>
                                <div class="ketthuc">Kết thúc: 08/07/2024</div>
                            </div>
                        </div>
                    </div>
                        <div class="amounts">
                            <div class="trangthai">{props.data.status1}</div>
                        </div>
                </div>
                <div class="bills">
                    <div class="detailss">
                        <div class="dates">
                            <div class="semester">{props.data.semester}</div>
                        </div>
                        <div class="subscription-names">
                            <div class="texts">
                            <div class="tenbaibao">{props.data.name2}</div>
                                <div class="ketthucs">Kết thúc: 09/07/2024</div>
                            </div>
                        </div>
                    </div>
                    <div class="amounts">
                        <div class="trangthai">{props.data.status2}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default DetailGoal;
