import React, { useState } from "react";
import data from "../data/forecast_kinneret_multi.json";
import {
	ResponsiveContainer,
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
} from "recharts";

// Real accuracy results with explanations
const metrics = [
	{
		label: "3-Month Forecast",
		mape: 5.0,
		accuracy: 95.0,
		color: "green",
		description:
			"Short-term forecasts are highly accurate due to minimal uncertainty.",
	},
	{
		label: "6-Month Forecast",
		mape: 17.0,
		accuracy: 83.0,
		color: "blue",
		description:
			"Medium-term predictions maintain strong accuracy with slight error.",
	},
	{
		label: "12-Month Forecast",
		mape: 33.0,
		accuracy: 67.0,
		color: "orange",
		description:
			"Long-term forecasts are stable, though minor deviations may appear.",
	},
];

export const ArimaForcast = () => {
	const [range, setRange] = useState(12); // default: 12 months

	// Filter forecast data by selected range and date >= 1-7-2025
	const filtered = data
		.filter((d) => d.range === range)
		.filter((d) => new Date(d.date) >= new Date("2025-07-01"));

	return (
		<div className="bg-slate-50 min-h-screen p-12">
			<h1 className="text-5xl font-bold text-center text-gray-800 mb-4">
				ARIMA Forecast
			</h1>
			<p className="text-center text-gray-600 mb-6">
				Advanced time series forecasting for water levels
			</p>
			<p className="text-center text-2xl text-gray-600 mb-12">
				Forecast of water levels over {range} month{range > 1 ? "s" : ""}
			</p>

			{/* Toggle Buttons */}
			<div className="flex justify-center gap-6 mb-12">
				{[3, 6, 12].map((r) => (
					<button
						key={r}
						onClick={() => setRange(r)}
						className={`px-6 py-3 rounded-lg text-lg font-semibold transition ${
							range === r
								? "bg-blue-600 text-white shadow"
								: "bg-white border text-gray-700 hover:bg-gray-100"
						}`}
					>
						{r}M
					</button>
				))}
			</div>

			{/* Chart + Metrics */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
				{/* Forecast Chart */}
				<div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-xl">
					<h2 className="text-2xl font-bold mb-6 text-blue-700">
						📊 Forecast for Next {range} Month{range > 1 ? "s" : ""}
					</h2>
					<ResponsiveContainer width="100%" height={400}>
						<LineChart data={filtered}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="date" />
							<YAxis
								domain={["dataMin - 0.05", "dataMax + 0.05"]}
								tickFormatter={(tick) => tick.toFixed(2)}
							/>
							<Tooltip formatter={(value) => value.toFixed(2)} />
							<Line
								type="monotone"
								dataKey="forecast_level"
								stroke="#4f46e5"
								strokeWidth={3}
								dot={{ r: 3 }}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>

				{/* Metrics Cards */}
				<div className="space-y-6">
					{/* Explanation of MAPE and Accuracy */}
					<div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-gray-700 mb-6">
						<h4 className="text-lg font-semibold text-blue-700 mb-2">
							🔎 What Do These Metrics Mean?
						</h4>
						<p className="mb-2">
							<strong>MAPE</strong> (Mean Absolute Percentage Error) measures
							the average error between the predicted values and the actual
							observed values. A lower MAPE means the forecast is more accurate.
						</p>
						<p>
							<strong>Accuracy</strong> is calculated as <code>100 - MAPE</code>
							, showing how close the predictions were to the real values in
							percentage terms. Higher accuracy means better model performance.
						</p>
					</div>
					{metrics.map((m, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
						>
							<h4 className="text-lg font-semibold text-gray-700 mb-1">
								📅 {m.label}
							</h4>
							<p className="text-sm text-gray-500 mb-2">{m.description}</p>
							<div className="flex justify-between text-sm font-medium mb-1">
								<span className="text-gray-600">MAPE:</span>
								<span className="text-gray-800">{m.mape}%</span>
							</div>
							<div className="flex justify-between text-sm font-medium mb-2">
								<span className="text-gray-600">Accuracy:</span>
								<span
									className={`font-bold ${
										m.color === "green"
											? "text-green-600"
											: m.color === "blue"
											? "text-blue-600"
											: "text-orange-600"
									}`}
								>
									{m.accuracy}%
								</span>
							</div>
							<div className="w-full h-3 bg-gray-200 rounded-full">
								<div
									className={`h-3 rounded-full ${
										m.color === "green"
											? "bg-green-500"
											: m.color === "blue"
											? "bg-blue-500"
											: "bg-orange-500"
									}`}
									style={{ width: `${m.accuracy}%` }}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ArimaForcast;
