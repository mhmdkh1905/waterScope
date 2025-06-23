import React, { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import temperatureData from "../data/kinneret_temperature_yearly.json";
import InsightBox from "../cards/InsightBox";

const TemperatureTrend = () => {
  const [chartType, setChartType] = useState("line");

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        🌡 Temperature (°C)
      </h3>
      <p className="text-gray-600 mb-3">
        This chart shows the average yearly temperature in the region.
        Higher temperatures can lead to more evaporation and influence
        the lake’s water balance.
      </p>

      <div className="flex justify-end mb-2">
        <button
          onClick={() => setChartType(chartType === "line" ? "bar" : "line")}
          className="text-sm text-blue-600 hover:underline"
        >
          Switch to {chartType === "line" ? "Bar" : "Line"} Chart
        </button>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        {chartType === "line" ? (
          <LineChart data={temperatureData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#dc2626"
              strokeWidth={2}
            />
          </LineChart>
        ) : (
          <BarChart data={temperatureData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="temperature" fill="#dc2626" />
          </BarChart>
        )}
      </ResponsiveContainer>

      <div className="mt-4">
        <InsightBox
          type="warning"
          message="Average temperature rose by 1.2°C since 2010."
        />
      </div>
    </div>
  );
};

export default TemperatureTrend;
