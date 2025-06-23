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
import trendData from "../data/trend_yearly_kinneret.json";
import InsightBox from "../cards/InsightBox";

const WaterLevelTrend = () => {
  const [chartType, setChartType] = useState("line");

  const slope = -0.04101;
  const intercept = -209.88379;
  const r2 = 0.2549;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        📉 Water Level Trend (Sea of Galilee)
      </h3>

      <p className="text-gray-600 mb-3">
        This chart shows the long-term trend of the Sea of Galilee water level.
        A linear regression model was used to estimate the general direction
        over time. The trend line helps visualize whether the water level is
        generally increasing, decreasing, or stable over the years.
      </p>

      <div className="flex justify-end mb-2">
        <button
          onClick={() => setChartType(chartType === "line" ? "bar" : "line")}
          className="text-sm text-blue-600 hover:underline"
        >
          Switch to {chartType === "line" ? "Bar" : "Line"} Chart
        </button>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        {chartType === "line" ? (
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="level"
              stroke="#3b82f6"
              name="Actual Level"
            />
            <Line
              type="monotone"
              dataKey="fitted"
              stroke="#f97316"
              strokeDasharray="4 4"
              name="Trend Line"
            />
          </LineChart>
        ) : (
          <BarChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="level" fill="#3b82f6" name="Actual Level" />
            <Bar dataKey="fitted" fill="#f97316" name="Trend Line" />
          </BarChart>
        )}
      </ResponsiveContainer>

      <div className="mt-4">
        <InsightBox
          type="warning"
          message="Water level declined by approx. 4.1 cm per year since 1966."
        />
      </div>

      <div className="mt-6 text-gray-700 space-y-2">
        <p>
          <strong>Equation:</strong> level = {slope} × time_index + {intercept}
        </p>
        <p>
          <strong>R² Score:</strong> {r2}
        </p>
        <p className="text-gray-700">
          The trend line shows a gradual long-term{" "}
          <span className="font-semibold text-red-600">decline</span> in the
          water level of the Sea of Galilee. According to the regression model,
          the level has decreased by approximately{" "}
          <span className="font-semibold">4.1 cm per year</span> since 1966.
          This suggests a potential long-term impact of climate changes or
          increased water usage over the decades.
        </p>
      </div>
    </div>
  );
};

export default WaterLevelTrend;
