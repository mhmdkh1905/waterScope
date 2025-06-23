// OverView.jsx
import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

import WaterLevelOverview from "../charts/WaterLevelOverview";
import RainfallOverview from "../charts/RainfallOverview";
import { StatCard, ChartCard } from "../cards/StatCardsOverView";
import MiniForecastCard from "../cards/MiniForecastCard";

const OverView = () => {
	return (
		<div className="bg-blue-50 min-h-screen py-16 px-4">
			<h1 className="text-5xl font-bold text-center text-gray-800 mb-4">
				Over View
			</h1>
			{/* Stats Cards Section */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
				<StatCard
					title="Water Level"
					value="-211.36 m"
					subtext="Latest reading from 2024"
					color="blue"
				/>
				<StatCard
					title="Rainfall"
					value="510.2 mm"
					subtext="Total rainfall in 2024"
					color="lightblue"
				/>
				<StatCard
					title="Temperature"
					value="23.7°C"
					subtext="Average temperature in 2024"
					color="orange"
				/>
				<StatCard
					title="Water Quality"
					value="93%"
					subtext="Excellent quality"
					color="green"
				/>
			</div>

			{/* Water Level + Forecast Side by Side */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
				<div className="md:col-span-2">
					<WaterLevelOverview />
				</div>
				<div>
					<MiniForecastCard />
				</div>
			</div>

			{/* Rainfall + Map Side by Side */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
				<div className="md:col-span-2">
					<RainfallOverview />
				</div>
			</div>
		</div>
	);
};

export default OverView;
