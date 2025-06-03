import React, { useEffect, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer,
} from "recharts";
import { getDatabase, ref, get, child } from "firebase/database";

export default function TemperatureChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dbRef = ref(getDatabase());
    const cities = {
      north: ["haifa"],
      central: ["telaviv"],
      south: ["beersheva"],
    };

    async function fetchTempData() {
      const yearly = {};
      for (const [region, cityList] of Object.entries(cities)) {
        for (const city of cityList) {
          const snapshot = await get(child(dbRef, `temperature/${city}`));
          if (snapshot.exists()) {
            const years = snapshot.val();
            Object.entries(years).forEach(([year, months]) => {
              months.forEach((entry) => {
                const label = `${entry.month} ${year}`;
                if (!yearly[label]) yearly[label] = { month: label };
                yearly[label][region] = (yearly[label][region] || 0) + (entry.avgTemp || 0);
              });
            });
          }
        }
      }
      const chartData = Object.values(yearly).sort((a, b) =>
        new Date(a.month + " 01") - new Date(b.month + " 01")
      );
      setData(chartData);
    }

    fetchTempData();
  }, []);

  return (
    <div className="bg-white border border-teal-100 rounded-lg p-4 shadow-sm">
      <h3 className="text-md font-semibold text-teal-800 mb-3">Monthly Avg Temperature (°C)</h3>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="north" name="Northern Israel" stroke="#f97316" />
          <Line type="monotone" dataKey="central" name="Central Israel" stroke="#0ea5e9" />
          <Line type="monotone" dataKey="south" name="Southern Israel" stroke="#14b8a6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
