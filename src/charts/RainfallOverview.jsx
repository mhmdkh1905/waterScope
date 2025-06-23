// RainfallOverview.jsx
import React, { useState } from "react";
import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from "recharts";
import rainfallData from "../data/rainfall_by_year.json";

const RainfallOverview = () => {
	const years = Object.keys(rainfallData)
		.map(Number)
		.filter((y) => y >= 1977 && y <= 2024)
		.sort((a, b) => b - a)
		.map(String);

	const [selectedYear, setSelectedYear] = useState(years[0]);

	return (
		<div className="bg-white p-6 rounded-xl shadow w-full">
			<div className="mb-4">
				<h3 className="text-xl font-bold text-sky-500 mb-1">
					🌧 Kinneret Rainfall Overview ({selectedYear})
				</h3>
				<p className="text-sm text-gray-600">
					This chart shows the monthly rainfall (in mm) measured near the Sea of
					Galilee.
				</p>
			</div>

			<div className="flex justify-end mb-4">
				<select
					value={selectedYear}
					onChange={(e) => setSelectedYear(e.target.value)}
					className="border border-gray-300 rounded px-2 py-1"
				>
					{years.map((year) => (
						<option key={year} value={year}>
							{year}
						</option>
					))}
				</select>
			</div>

			<ResponsiveContainer width="100%" height={300}>
				<LineChart data={rainfallData[selectedYear]}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" />
					<YAxis tickFormatter={(val) => val.toFixed(1)} />
					<Tooltip />
					<Line
						type="monotone"
						dataKey="rainfall"
						stroke="#38bdf8" // Tailwind 'sky-400'
						strokeWidth={2}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default RainfallOverview;
