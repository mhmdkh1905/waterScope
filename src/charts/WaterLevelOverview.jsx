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
import rawData from "../data/kinneret_levels_by_year.json";

const WaterLevelOverview = () => {
	// Filter out 1966 and sort
	const years = Object.keys(rawData)
		.map(Number)
		.filter((y) => y >= 1967 && y <= 2024)
		.sort((a, b) => b - a)
		.map(String);

	const [selectedYear, setSelectedYear] = useState(years[0]);

	return (
		<div className="bg-white p-6 rounded-xl shadow w-full">
			<div className="mb-4">
				<h3 className="text-xl font-bold text-blue-700 mb-1">
					🌊 Kinneret Water Levels ({selectedYear})
				</h3>
				<p className="text-sm text-gray-600">
					This chart shows the average monthly water level (in meters) of the
					Sea of Galilee for the selected year. Use the dropdown to explore
					historical data.
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
				<LineChart data={rawData[selectedYear]}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" />
					<YAxis
						domain={["dataMin - 0.2", "dataMax + 0.2"]}
						tickFormatter={(value) => value.toFixed(2)}
					/>
					<Tooltip />
					<Line
						type="monotone"
						dataKey="level"
						stroke="#3b82f6"
						strokeWidth={2}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default WaterLevelOverview;
