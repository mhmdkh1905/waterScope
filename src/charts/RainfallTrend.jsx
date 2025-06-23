import React, { useState } from "react";
import {
	ResponsiveContainer,
	LineChart,
	Line,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";
import rainfallData from "../data/rainfall_kinneret_kvuza_yearly.json";
import InsightBox from "../cards/InsightBox";

const RainfallTrend = () => {
	const [chartType, setChartType] = useState("line");

	// Extract year from "date"
	const formattedData = rainfallData.map((d) => ({
		...d,
		year: new Date(d.date).getFullYear(),
	}));

	return (
		<div className="bg-white p-6 rounded-xl shadow-lg">
			<h3 className="text-xl font-semibold text-gray-800 mb-4">
				🌧 Rainfall (mm)
			</h3>
			<p className="text-gray-600 mt-3">
				This chart presents the annual rainfall around the Sea of Galilee.
				Tracking rainfall trends over time can help evaluate changes in water
				inflow into the lake and detect potential long-term shifts in regional
				precipitation patterns.
			</p>
			;
			<div className="flex justify-end mb-2">
				<button
					onClick={() => setChartType(chartType === "line" ? "bar" : "line")}
					className="text-sm text-blue-600 hover:underline"
				>
					Switch to {chartType === "line" ? "Bar" : "Line"} Chart
				</button>
			</div>
			<ResponsiveContainer width="100%" height={350}>
				{chartType === "line" ? (
					<LineChart data={formattedData}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="year" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line
							type="monotone"
							dataKey="rainfall"
							stroke="#16a34a"
							strokeWidth={2}
						/>
					</LineChart>
				) : (
					<BarChart data={formattedData}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="year" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="rainfall" fill="#16a34a" />
					</BarChart>
				)}
			</ResponsiveContainer>
			<div className="mt-4">
				<InsightBox
					type="warning"
					message="Rainfall decreased by 12% between 1990–2000 and 2010–2020."
				/>
			</div>
		</div>
	);
};

export default RainfallTrend;
