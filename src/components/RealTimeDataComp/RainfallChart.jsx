import React from "react";
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

const data = [
  { month: "Apr 2023", north: 5, central: 3, south: 1 },
  { month: "May 2023", north: 2, central: 1, south: 0 },
  { month: "Jun 2023", north: 0, central: 0, south: 0 },
  { month: "Jul 2023", north: 0, central: 0, south: 0 },
  { month: "Aug 2023", north: 0, central: 0, south: 0 },
  { month: "Sep 2023", north: 3, central: 2, south: 0 },
  { month: "Oct 2023", north: 8, central: 5, south: 2 },
  { month: "Nov 2023", north: 45, central: 35, south: 10 },
  { month: "Dec 2023", north: 120, central: 95, south: 28 },
  { month: "Jan 2024", north: 155, central: 120, south: 40 },
  { month: "Feb 2024", north: 110, central: 90, south: 20 },
  { month: "Mar 2024", north: 60, central: 45, south: 8 },
  { month: "Apr 2024", north: 10, central: 6, south: 2 },
];

export default function RainfallChart() {
  return (
    <div className="bg-white border border-teal-100 rounded-lg p-4 shadow-sm">
      <h3 className="text-md font-semibold text-teal-800 mb-3">
        Monthly Rainfall (2023–2024)
      </h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis label={{ value: "Rainfall (mm)", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="north" name="Northern Israel" fill="#0ea5e9" />
          <Bar dataKey="central" name="Central Israel" fill="#14b8a6" />
          <Bar dataKey="south" name="Southern Israel" fill="#f97316" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
