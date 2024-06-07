import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './ChartComponent.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent = (props) => {
    const [view, setView] = useState('week');
    const [data, setData] = useState({
        week: [0, 3, 0.5, 0, 1, 2, 1.5],
        month: [10, 0, 0, 0], // Hours per week in a month
        semester: [10, 0, 0, 0] // Hours per month in a semester
    });

    const getLabels = () => {
        switch (view) {
            case 'week':
                return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            case 'month':
                return ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
            case 'semester':
                return ['Month 1', 'Month 2', 'Month 3', 'Month 4'];
            default:
                return [];
        }
    };

    const getLabelText = () => {
        switch (view) {
            case 'week':
                return { label: 'Giờ thực hiện trong ngày' };
            case 'month':
                return { label: 'Giờ thực hiện trong tuần' };
            case 'semester':
                return { label: 'Giờ thực hiện trong tháng' };
            default:
                return { label: '', text: '' };
        }
    };

    const { label, text } = getLabelText();

    return (
        <div className="chart-container">
            <div className='chart-title'>Biểu đồ số giờ làm việc</div>
            <div className="controls">
                <label>
                    Số giờ tham gia {props.data.typee} theo 
                    <select onChange={(e) => setView(e.target.value)} value={view}>
                        <option value="week">tuần</option>
                        <option value="month">tháng</option>
                        <option value="semester">kỳ</option>
                    </select>
                </label>
                <div className="chart-wrapper">
                    <Bar
                        data={{
                            labels: getLabels(),
                            datasets: [
                                {
                                    label: label,
                                    data: data[view],
                                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                },
                            ],
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    position: 'top',
                                },
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ChartComponent;