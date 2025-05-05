import React, { useState, useEffect } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  Legend, CartesianGrid, ResponsiveContainer,
} from "recharts";

export default function RegionalTemperatureChart() {
  const [data, setData] = useState([]);
  const [year, setYear] = useState("2015");

  useEffect(() => {
    const loadData = async () => {
      const telAvivData = await fetch("/temperature_tel_aviv_2015_2025.json").then(res => res.json());
      const haifaData = await fetch("/temperature_haifa_2015_2025.json").then(res => res.json());
      const beerShevaData = await fetch("/temperature_beersheva_2015_2025.json").then(res => res.json());

      const center = telAvivData[year] || [];
      const north = haifaData[year] || [];
      const south = beerShevaData[year] || [];

      const combined = center.map((entry, i) => ({
        month: entry.month,
        center: entry.avgTemp,
        north: north?.[i]?.avgTemp ?? null,
        south: south?.[i]?.avgTemp ?? null,
      }));

      setData(combined);
    };

    loadData();
  }, [year]);

  return (
    <div className="bg-white p-6 border rounded shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-teal-800">
          Avg Monthly Temperatures (Center, North, South) – {year}
        </h2>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border border-gray-300 px-3 py-1 rounded text-sm"
        >
          {Array.from({ length: 11 }, (_, i) => {
            const y = 2015 + i;
            return <option key={y} value={y}>{y}</option>;
          })}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis label={{ value: "Temperatures °C", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="center"
            name="Center (Tel Aviv)"
            stroke="#0ea5e9"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="north"
            name="North (Haifa)"
            stroke="#f97316"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="south"
            name="South (Beer Sheva)"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
