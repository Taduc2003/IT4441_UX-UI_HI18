// src/CircleGraph.js

import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';

const CircleGraph = ({ percentage, color }) => {
  const data = [
    { name: 'Blue', value: percentage },
    { name: 'White', value: 100 - percentage },
  ];

  const COLORS = [color, '#FFFFFF'];

  return (
    <PieChart width={100} height={100}>
      <Pie
        data={data}
        cx={50}
        cy={50}
        innerRadius={25}
        outerRadius={40}
        startAngle={90}
        endAngle={450}
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <Label
          value={`${percentage}%`}
          position="center"
          fill="#000"
          style={{
            fontSize: '12px',
            fontWeight: 'bold',
          }}
        />
      </Pie>
    </PieChart>
  );
};

export default CircleGraph;
