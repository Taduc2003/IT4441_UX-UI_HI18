import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './ChartComponent.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent = () => {
    const [view, setView] = useState('week');
    const [data, setData] = useState({
        week: [0, 3, 0.5, 0, 1, 2, 1.5],
        month: [15, 12, 18, 22], // Hours per week in a month
        semester: [50, 45, 40, 35] // Hours per month in a semester
    });

    const [inputData, setInputData] = useState('');

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
                return { label: 'Giờ thực hiện trong ngày', text: 'Số giờ tham gia nghiên cứu được theo tuần' };
            case 'month':
                return { label: 'Giờ làm trong tuần', text: 'Số giờ tham gia nghiên cứu được theo tháng' };
            case 'semester':
                return { label: 'Giờ làm việc trong tháng', text: 'Số giờ tham gia nghiên cứu được theo kỳ' };
            default:
                return { label: '', text: '' };
        }
    };

    const { label, text } = getLabelText();


    return (
        <div className="chart-container">
            <div className='title'> Biểu đồ số giờ làm việc</div>
            <div className="controls">
                <label>
                    Xem theo:
                    <select onChange={(e) => setView(e.target.value)} value={view}>
                        <option value="week">Tuần</option>
                        <option value="month">Tháng</option>
                        <option value="semester">Kỳ</option>
                    </select>
                </label>
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
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: text,
                        },
                    },
                }}
            />
            </div>
        </div>
    );
};

export default ChartComponent;
