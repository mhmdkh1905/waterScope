import React from "react";

const jsonFiles = [
  {
    title: "📈 Yearly Rainfall",
    description: "Annual rainfall in the Kinneret region (1977–2025, mm).",
    path: "/data/rainfall_kinneret_kvuza_yearly.json",
    fileName: "rainfall_kinneret_kvuza_yearly.json",
  },
  {
    title: "🌡 Yearly Temperature",
    description: "Average yearly water temperature of the Kinneret (2010–2023, °C).",
    path: "/data/kinneret_temperature_yearly.json",
    fileName: "kinneret_temperature_yearly.json",
  },
  {
    title: "📉 Yearly Water Levels",
    description: "Average Kinneret water levels by year (1966–2023, meters below sea level).",
    path: "/data/kinneret_water_levels_yearly.json",
    fileName: "kinneret_water_levels_yearly.json",
  },
  {
    title: "🔮 Forecasted Water Levels",
    description: "ARIMA model predictions (Apr 2025 – Mar 2026).",
    path: "/data/forecast_kinneret.json",
    fileName: "forecast_kinneret.json",
  },
  {
    title: "📊 Merged Weather Data",
    description: "Combined temperature, rainfall, and level data (2010–2023).",
    path: "/data/merged_weather_data.json",
    fileName: "merged_weather_data.json",
  },
];

const DataPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        📂 Kinneret Environmental JSON Datasets
      </h2>

      <div className="space-y-6 max-w-3xl mx-auto">
        {jsonFiles.map(({ title, description, path, fileName }) => (
          <div
            key={fileName}
            className="bg-white border border-gray-200 shadow-sm rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
            <p className="text-sm text-gray-600 mb-3">{description}</p>
            <a
              href={path}
              download={fileName}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              ⬇ Download JSON
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataPage;
