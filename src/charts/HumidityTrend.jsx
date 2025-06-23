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
import humidityData from "../data/humidity_vs_water_level_fitted.json";
import InsightBox from "../cards/InsightBox";

const HumidityTrend = () => {
  const [chartType, setChartType] = useState("line");

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        💨 Humidity (%)
      </h3>
      <p className="text-gray-600 mb-3">
        This chart shows the average annual humidity near the Sea of Galilee.
        Humidity levels affect evaporation rates, which can indirectly influence
        water levels.
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
          <LineChart data={humidityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="humidity"
              stroke="#0ea5e9"
              strokeWidth={2}
            />
          </LineChart>
        ) : (
          <BarChart data={humidityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="humidity" fill="#0ea5e9" />
          </BarChart>
        )}
      </ResponsiveContainer>

      <div className="mt-4">
        <InsightBox
          type="info"
          message="Humidity has remained relatively stable, with minor drops in the 2010s."
        />
      </div>
    </div>
  );
};

export default HumidityTrend;
