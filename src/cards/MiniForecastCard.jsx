// MiniForecastCard.jsx
import React from "react";
import forecastData from "../data/forecast_kinneret.json";
import { ArrowDown, ArrowUp, Droplet } from "lucide-react";

const MiniForecastCard = () => {
  // Extract current and next month forecasts (June & July 2025)
  const current = forecastData.find(f => f.date === "2025-06-01");
  const next = forecastData.find(f => f.date === "2025-07-01");

  if (!current || !next) return null;

  const delta = (next.forecast_level - current.forecast_level).toFixed(2);
  const isRising = delta < 0;

  return (
    <div className="bg-white border border-blue-200 rounded-xl p-4 shadow-sm flex items-center space-x-4">
      <Droplet className="w-8 h-8 text-blue-600" />
      <div>
        <h4 className="text-sm font-semibold text-blue-600">Next Month Forecast</h4>
        <p className="text-xl font-bold text-gray-800">
          {next.forecast_level.toFixed(2)} m{" "}
          {isRising ? (
            <ArrowUp className="inline-block w-5 h-5 text-green-500 ml-1" />
          ) : (
            <ArrowDown className="inline-block w-5 h-5 text-red-500 ml-1" />
          )}
        </p>
        <p className="text-xs text-gray-500">
          {isRising ? "Water level expected to rise" : "Water level expected to drop"}
        </p>
      </div>
    </div>
  );
};

export default MiniForecastCard;
