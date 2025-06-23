import React from "react";
import combinedHumidityData from "../data/combined_climate_model_with_humidity.json";
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

const CombinedClimateModel = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        🧠 Combined Model: Rainfall + Temperature + Humidity → Water Level
      </h3>

      <p className="text-gray-600">
        This model uses multiple linear regression to predict water levels using
        rainfall, temperature, and humidity combined.
      </p>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={combinedHumidityData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis
            label={{
              value: "Water Level (m)",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length > 0) {
                const data = payload[0].payload;
                return (
                  <div className="bg-white border rounded-lg p-4 shadow text-sm space-y-1">
                    <div>
                      <strong className="text-gray-700">Year:</strong> {label}
                    </div>
                    <div>
                      <strong className="text-blue-600">Water Level:</strong> {data.level} m
                    </div>
                    <div>
                      <strong className="text-purple-600">Predicted Level:</strong> {data.fitted_level} m
                    </div>
                    <div>
                      <strong className="text-green-600">Rainfall:</strong> {data.rainfall} mm
                    </div>
                    <div>
                      <strong className="text-red-600">Temperature:</strong> {data.temperature} °C
                    </div>
                    <div>
                      <strong className="text-sky-600">Humidity:</strong> {data.humidity} %
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="level"
            stroke="#2563eb"
            name="Water Level"
          />
          <Line
            type="monotone"
            dataKey="fitted_level"
            stroke="#9333ea"
            strokeDasharray="4 4"
            name="Predicted Level"
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="text-gray-600 mt-3 space-y-1">
        <p>
          <strong>Model used:</strong> Multiple Linear Regression
        </p>
        <p>
          <strong>Equation:</strong>{" "}
          <code>
            level = 0.0071 × rainfall - 0.0862 × temp - 0.4562 × humidity - 181.36
          </code>
        </p>
        <p>
          <strong>R²:</strong> 0.337 → This model explains ~33.7% of the variation in water level.
        </p>
        <p>
          The addition of humidity improved the model significantly. However, it still indicates that climate alone does not fully explain water level changes.
        </p>
      </div>
    </div>
  );
};

export default CombinedClimateModel;
