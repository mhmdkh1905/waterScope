import React from "react";
import humidityData from "../data/humidity_vs_water_level_fitted.json";
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

const HumidityVsWaterLevel = () => (
  <section>
    <h3 className="text-xl font-semibold text-gray-700 mb-4">
      💨 Humidity vs. Water Level
    </h3>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={humidityData}>
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
            value: "Humidity (%)",
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
          dataKey="fitted"
          stroke="#f97316"
          strokeDasharray="4 4"
          name="Fitted Level"
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="humidity"
          stroke="#22c55e"
          name="Humidity"
        />
      </LineChart>
    </ResponsiveContainer>

    <div className="text-gray-600 mt-3 space-y-1">
      <p>
        <strong>Model used:</strong> Simple Linear Regression
      </p>
      <p>
        <strong>Description:</strong> Predicts water level based on yearly average humidity.
      </p>
      <p>
        <strong>Equation:</strong> <code>level = -0.0642 × humidity + -207.40</code>
      </p>
      <p>
        <strong>R²:</strong> 0.014 → The model explains ~1.4% of the variation in water level.
      </p>
      <p>
        <strong>Pearson’s r:</strong> -0.12 → Very weak negative correlation between humidity and water level.
      </p>
      <p>
        Humidity alone does not strongly influence water levels. Other climatic and non-climatic factors are likely more significant.
      </p>
    </div>
  </section>
);

export default HumidityVsWaterLevel;