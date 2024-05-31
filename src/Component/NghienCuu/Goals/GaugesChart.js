import React from 'react';
import GaugeChart from 'react-gauge-chart';

const GaugeChartComponent = ({real,need}) => {
    const percent = real/need;
    return (
        <GaugeChart 
            id="gauge-chart"
            nrOfLevels={6}
            arcsLength={[percent, 1-percent]} // Adjust arc lengths if necessary
            colors={['#00FF00','#FF5F6D']}
            percent={percent}
            arcPadding={0.02}
            textColor="#000000"
            needleColor="#FF0000"
        />
    );
}

export default GaugeChartComponent;
