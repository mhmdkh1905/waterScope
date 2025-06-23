// ImpactPieChart.jsx
import React from "react";
import {
	PieChart,
	Pie,
	Cell,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

// Based on R^2 contributions from each individual model, normalized to 100%
const data = [
	{ name: "Rainfall", value: 20 }, // 0.069 of 0.337 ~ 20%
	{ name: "Temperature", value: 11 }, // 0.038 of 0.337 ~ 11%
	{ name: "Humidity", value: 4 }, // 0.014 of 0.337 ~ 4%
	{ name: "Other", value: 65 }, // remaining unmodeled variation
];

const COLORS = ["#3b82f6", "#f59e0b", "#10b981", "#a855f7"];

const ImpactPieChart = () => {
	return (
		<section>
			<h3 className="text-xl font-semibold text-gray-800 mb-4">
				Impact Factor Distribution
			</h3>
			<ResponsiveContainer width="100%" height={300}>
				<PieChart>
					<Pie
						isAnimationActive={true}
						animationDuration={800}
						animationEasing="ease-out"
						data={data}
						cx="50%"
						cy="50%"
						innerRadius={60}
						outerRadius={90}
						fill="#8884d8"
						paddingAngle={5}
						dataKey="value"
						label
					>
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
					<Tooltip formatter={(value) => `${value}%`} />
					<Legend />
				</PieChart>
			</ResponsiveContainer>
		</section>
	);
};

export default ImpactPieChart;
