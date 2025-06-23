import React from "react";
import RainfallVsWaterLevel from "../charts/RainfallVsWaterLevel";
import TemperatureVsWaterLevel from "../charts/TemperatureVsWaterLevel";
import HumidityVsWaterLevel from "../charts/HumidityVsWaterLevel";
import CombinedClimateModel from "../charts/CombinedClimateModel";
import ImpactPieChart from "../charts/ImpactPieChart";

const ClimateImpact = () => {
	return (
		<div className="bg-white p-8 rounded-xl shadow-lg space-y-12">
			<h1 className="text-5xl font-bold text-center text-gray-800 mb-4">
				Climate Impact on Water Levels
			</h1>
			<p className="text-gray-600 mt-2">
				This page explores how climate variables such as rainfall, temperature, and humidity
				influence the water level of the Sea of Galilee. Each section visualizes the
				relationship using charts and explains how strongly each factor contributes to water level changes.
			</p>

			<div className="bg-white p-6 rounded-xl shadow-md">
				<ImpactPieChart />
			</div>

			<div className="bg-white p-6 rounded-xl shadow-md">
				<RainfallVsWaterLevel />
			</div>

			<div className="bg-white p-6 rounded-xl shadow-md">
				<TemperatureVsWaterLevel />
			</div>

			<div className="bg-white p-6 rounded-xl shadow-md">
				<HumidityVsWaterLevel />
			</div>

			<div className="bg-white p-6 rounded-xl shadow-md">
				<CombinedClimateModel />
			</div>

			{/* 🔚 Other Influencing Factors */}
			<section className="pt-10 border-t border-gray-200">
				<h3 className="text-2xl font-bold text-gray-800 mb-4">
					Other Factors Influencing the Sea of Galilee
				</h3>

				<div className="space-y-4 text-gray-700">
					<p>
						Our climate model, which combines <strong>rainfall</strong>, {" "}
						<strong>temperature</strong>, and <strong>humidity</strong>,
						explains approximately <strong>33.7%</strong> of the variation in
						water levels. While this is a meaningful improvement, it also shows
						that <strong>66% of the changes</strong> remain unexplained by
						weather alone.
					</p>

					<p>
						This indicates that <strong>other, non-climatic factors</strong> {" "}
						likely play a major role in the fluctuations of the Sea of Galilee’s
						water level:
					</p>

					<ul className="list-disc pl-6 space-y-3">
						<li>
							<strong>🚰 Water Pumping & Usage:</strong> Significant quantities
							are extracted for agriculture, urban supply, and industry. This
							human activity reduces levels regardless of rainfall.
						</li>
						<li>
							<strong>🚛 National Water Carrier:</strong> Israel’s main water
							distribution system draws directly from the lake, further
							influencing natural levels.
						</li>
						<li>
							<strong>📊 Government Policy:</strong> Water storage, export
							regulations, and emergency drought decisions also impact the lake.
						</li>
						<li>
							<strong>🌊 Subsurface Flows:</strong> Underground springs,
							seepage, and geological features may cause hidden inflows or
							outflows.
						</li>
					</ul>

					<p className="pt-2">
						These factors must be considered alongside weather when building any
						long-term strategy to understand or manage the lake’s water
						behavior.
					</p>
				</div>
			</section>
		</div>
	);
};

export default ClimateImpact;
