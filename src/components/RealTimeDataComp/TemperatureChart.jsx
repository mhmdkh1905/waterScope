import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Apr 2023", north: 19, central: 21, south: 23 },
  { month: "May 2023", north: 22, central: 25, south: 27 },
  { month: "Jun 2023", north: 25, central: 27, south: 29 },
  { month: "Jul 2023", north: 28, central: 30, south: 32 },
  { month: "Aug 2023", north: 29, central: 31, south: 33 },
  { month: "Sep 2023", north: 27, central: 29, south: 31 },
  { month: "Oct 2023", north: 25, central: 27, south: 29 },
  { month: "Nov 2023", north: 22, central: 24, south: 26 },
  { month: "Dec 2023", north: 19, central: 21, south: 23 },
  { month: "Jan 2024", north: 18, central: 20, south: 22 },
  { month: "Feb 2024", north: 19, central: 21, south: 23 },
  { month: "Mar 2024", north: 21, central: 23, south: 25 },
  { month: "Apr 2024", north: 23, central: 25, south: 27 },
];

export default function TemperatureChart() {
  return (
    <div className="bg-white border border-teal-100 rounded-lg p-4 shadow-sm">
      <h3 className="text-md font-semibold text-teal-800 mb-3">
        Monthly Average Temperatures (2023–2024)
      </h3>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis label={{ value: "Temperature (°C)", angle: -90, position: "insideLeft" }} />
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
