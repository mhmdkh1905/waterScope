// StatCards.jsx
import React from "react";

export const StatCard = ({ title, value, subtext, color }) => {
	const colorMap = {
		blue: "text-blue-600 border-blue-200",
		lightblue: "text-sky-500 border-sky-200",
		orange: "text-orange-500 border-orange-200",
		green: "text-green-600 border-green-200",
	};

	const progressColor = {
		blue: "bg-blue-500",
		lightblue: "bg-sky-400",
		orange: "bg-orange-500",
		green: "bg-green-500",
	}[color];

	return (
		<div
			className={`bg-white border ${colorMap[color]} rounded-xl p-6 shadow-sm`}
		>
			<h4 className={`text-sm font-semibold ${colorMap[color]}`}>{title}</h4>
			<p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
			<p className="text-sm text-gray-500 mt-1">{subtext}</p>
			<div className="h-2 bg-gray-200 rounded-full mt-4">
				<div
					className={`h-full rounded-full ${progressColor}`}
					style={{ width: "70%" }}
				></div>
			</div>
		</div>
	);
};

export const ChartCard = ({ title, children }) => (
	<div className="bg-white rounded-xl p-6 shadow-sm">
		<h4 className="text-md font-semibold text-gray-800 mb-4">{title}</h4>
		{children}
	</div>
);
