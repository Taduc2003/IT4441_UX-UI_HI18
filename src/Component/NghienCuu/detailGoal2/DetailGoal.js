import React from "react";
import "./DetailGoal.css";
const DetailGoal = () => {
  return (
    <div className = "top-contents">
        <div class="title">Các bài báo nghiên cứu trong kỳ</div>
        <div class="noidung">
            <div class="xemtatca">
                <div class="bills">
                    <div class="detailss">
                        <div class="dates">
                            <div class="semester">2023.1</div>
                        </div>
                        <div class="subscription-names">
                            <div class="texts">
                                <div class="tenbaibao">Cải thiện độ tan và độ hòa tan của meloxicam với hệ phân tán rắn</div>
                                <div class="ketthuc">Kết thúc: 08/07/2024</div>
                            </div>
                        </div>
                    </div>
                        <div class="amounts">
                            <div class="trangthai">Đã công bố</div>
                        </div>
                </div>
                <div class="bills">
                    <div class="detailss">
                        <div class="dates">
                            <div class="semester">2023.1</div>
                        </div>
                        <div class="subscription-names">
                            <div class="texts">
                                <div class="tenbaibao">Cải thiện độ tan và độ hòa tan của meloxicam với hệ phân tán rắn</div>
                                <div class="ketthucs">Kết thúc: 09/07/2024</div>
                            </div>
                        </div>
                    </div>
                    <div class="amounts">
                        <div class="trangthai">Chưa công bố</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default DetailGoal;
