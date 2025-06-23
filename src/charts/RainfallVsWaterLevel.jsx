import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import rainfallData from "../data/rainfall_vs_water_level_fitted.json";

const RainfallVsWaterLevel = () => (
  <section>
    <h3 className="text-xl font-semibold text-gray-700 mb-4">
      🌧 Rainfall vs. Water Level
    </h3>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={rainfallData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis
          yAxisId="left"
          label={{
            value: "Water Level (m)",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          label={{
            value: "Rainfall (mm)",
            angle: -90,
            position: "insideRight",
          }}
        />
        <Tooltip />
        <Legend />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="level"
          stroke="#2563eb"
          name="Water Level"
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="fitted_level"
          stroke="#f59e0b"
          strokeDasharray="4 4"
          name="Trend Line"
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="rainfall"
          stroke="#16a34a"
          name="Rainfall"
        />
      </LineChart>
    </ResponsiveContainer>

    <div className="text-gray-600 mt-3 space-y-1">
      <p><strong>Model used:</strong> Simple Linear Regression</p>
      <p><strong>Description:</strong> Predicts water level based on yearly rainfall amounts.</p>
      <p><strong>Equation:</strong> <code>level = 0.00297 × rainfall - 212.83</code></p>
      <p><strong>R²:</strong> 0.069 &rarr; The model explains ~7% of the variation in water level.</p>
      <p><strong>Pearson’s r:</strong> 0.26 &rarr; Weak positive correlation between rainfall and water level.</p>
      <p>
        This model shows a weak relationship. Water level slightly increases with rainfall,
        but other factors likely dominate.
      </p>
    </div>
  </section>
);

export default RainfallVsWaterLevel;
