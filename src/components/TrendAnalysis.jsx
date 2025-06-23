import React from "react";
import WaterLevelTrend from "../charts/WaterLevelTrend";
import RainfallTrend from "../charts/RainfallTrend";
import TemperatureTrend from "../charts/TemperatureTrend";
import HumidityTrend from "../charts/HumidityTrend";

const TrendAnalysis = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg space-y-8">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">Trend Analysis</h1>
      <p className="text-gray-600 mb-6">
        This page presents long-term trends in environmental factors that
        influence the Sea of Galilee’s water level. By analyzing historical data
        on rainfall, temperature, humidity, and water levels, we can better
        understand how climate patterns and regional changes have impacted this
        critical water source over time. The insights derived here can support
        more informed water management and climate adaptation strategies.
      </p>

      <WaterLevelTrend />
      <RainfallTrend />
      <TemperatureTrend />
      <HumidityTrend />
    </div>
  );
};

export default TrendAnalysis;
