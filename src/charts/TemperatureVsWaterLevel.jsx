import React from "react";
import temperatureData from "../data/temperature_vs_water_level_fitted.json";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const TemperatureVsWaterLevel = () => {
	return (
		<section>
			<h3 className="text-xl font-semibold text-gray-700 mb-4">
				🌡 Temperature vs. Water Level
			</h3>
			<ResponsiveContainer width="100%" height={400}>
				<LineChart data={temperatureData}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="year" />
					<YAxis
						yAxisId="left"
						label={{
							value: "Water Level (m)",
							angle: -90,
							position: "insideLeft",
						}}
					/>
					<YAxis
						yAxisId="right"
						orientation="right"
						label={{
							value: "Temperature (°C)",
							angle: -90,
							position: "insideRight",
						}}
					/>
					<Tooltip />
					<Legend />
					<Line yAxisId="left" type="monotone" dataKey="level" stroke="#2563eb" name="Water Level" />
					<Line yAxisId="left" type="monotone" dataKey="fitted_level" stroke="#f97316" strokeDasharray="4 4" name="Trend Line" />
					<Line yAxisId="right" type="monotone" dataKey="temperature" stroke="#dc2626" name="Temperature" />
				</LineChart>
			</ResponsiveContainer>
			<div className="text-gray-600 mt-3 space-y-1">
				<p><strong>Model used:</strong> Simple Linear Regression</p>
				<p><strong>Description:</strong> Predicts water level based on average yearly temperature.</p>
				<p><strong>Equation:</strong> <code>level = 0.344 × temp - 219.46</code></p>
				<p><strong>R²:</strong> 0.038 → The model explains ~3.8% of the variation in water level.</p>
				<p><strong>Pearson’s r:</strong> 0.19 → Very weak correlation between temperature and water level.</p>
				<p>This suggests temperature alone is not a strong predictor of water level changes.</p>
			</div>
		</section>
	);
};

export default TemperatureVsWaterLevel;