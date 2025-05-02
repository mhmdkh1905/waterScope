import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const WaterLevelChart = ({ data }) => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis 
            dataKey="month" 
            stroke="#64748b"
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            domain={[0, 100]}
            label={{ 
              value: 'Capacity %', 
              angle: -90, 
              position: 'insideLeft',
              style: { fill: '#64748b', fontSize: 12 }
            }}
            stroke="#64748b"
            tick={{ fontSize: 12 }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              borderColor: '#e2e8f0',
              borderRadius: '0.375rem',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            }}
            labelStyle={{ fontWeight: 'bold', color: '#0f172a' }}
            itemStyle={{ color: '#0d9488' }}
            formatter={(value) => [`${value}%`, 'Level']}
          />
          <Line 
            type="monotone" 
            dataKey="level" 
            stroke="#0d9488" 
            strokeWidth={2}
            dot={{ 
              stroke: '#0d9488', 
              strokeWidth: 2, 
              r: 4,
              fill: 'white' 
            }}
            activeDot={{ 
              stroke: '#0d9488', 
              strokeWidth: 2, 
              r: 6,
              fill: '#0d9488' 
            }}
            name="level"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WaterLevelChart;