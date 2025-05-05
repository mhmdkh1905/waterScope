import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function RainfallChart() {
  const [year, setYear] = useState("2023");
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const haifa = await fetch("/processed_rainfall_haifa.json").then(res => res.json());
      const telAviv = await fetch("/processed_rainfall_tel_aviv.json").then(res => res.json());
      const beerSheva = await fetch("/processed_rainfall_arad.json").then(res => res.json());

      const haifaData = haifa[year] || [];
      const telAvivData = telAviv[year] || [];
      const beerShevaData = beerSheva[year] || [];

      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      const combined = months.map((month, i) => ({
        month,
        north: haifaData[i]?.avgRainfall ?? 0,
        central: telAvivData[i]?.avgRainfall ?? 0,
        south: beerShevaData[i]?.avgRainfall ?? 0,
      }));

      setData(combined);
    };

    loadData();
  }, [year]);

  return (
    <div className="bg-white border border-teal-100 rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-md font-semibold text-teal-800">
          Monthly Rainfall – {year}
        </h3>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 text-sm"
        >
          {Array.from({ length: 11 }, (_, i) => {
            const y = 2015 + i;
            return <option key={y} value={y}>{y}</option>;
          })}
        </select>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis label={{ value: "Rainfall (mm)", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="north" name="North (Haifa)" fill="#0ea5e9" />
          <Bar dataKey="central" name="Center (Tel Aviv)" fill="#14b8a6" />
          <Bar dataKey="south" name="South (Beer Sheva)" fill="#f97316" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
