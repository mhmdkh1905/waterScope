import React from "react";

export default function WeatherCard({ icon, label, value, unit, iconColor }) {
  return (
    <div className="flex flex-col justify-between p-6 rounded-2xl border border-teal-100 bg-white w-full max-w-[300px] min-h-[140px] shadow-md">
      {/* Label & Icon */}
      <div className="flex items-center space-x-3 mb-4">
        <span className={`${iconColor} text-2xl`}>{icon}</span>
        <span className="text-lg font-medium text-teal-800">{label}</span>
      </div>

      {/* Value & Unit */}
      <div className="flex items-baseline space-x-2">
        <span className="text-4xl font-bold text-teal-900">{value}</span>
        <span className="text-lg text-teal-600">{unit}</span>
      </div>
    </div>
  );
}