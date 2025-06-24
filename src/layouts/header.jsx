// src/components/Header.jsx
import { Link, useLocation } from "react-router-dom";
import {
	TrendingUp,
	BarChart3,
	Folder,
	Activity,
	CloudRain,
	Waves,
} from "lucide-react";

const Header = () => {
	const location = useLocation();

	const navItems = [
		{ id: "overView", path: "overView", label: "Overview", icon: Waves },
		{
			id: "arima",
			path: "arimaForcast",
			label: "ARIMA Forecast",
			icon: TrendingUp,
		},
		{ id: "pca", path: "PCAAnalysis", label: "PCA Analysis", icon: BarChart3 },
		{
			id: "trends",
			path: "trendAnalysis",
			label: "Trend Analysis",
			icon: Activity,
		},
		{
			id: "climate",
			path: "climateImpact",
			label: "Climate Impact",
			icon: CloudRain,
		},
		{
			id: "dataPage",
			path: "dataPage",
			label: "Kinneret Data",
			icon: Folder,
		},
	];

	return (
		<header className="bg-white shadow-sm border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-3">
						<Link to="/home" className="flex items-center space-x-3">
							<Waves className="w-8 h-8 text-blue-600" />
							<h1 className="text-2xl font-bold text-gray-900">WaterScope</h1>
						</Link>
					</div>

					<nav className="hidden md:flex space-x-4">
						{navItems.map((item) => (
							<Link
								key={item.id}
								to={`/${item.path}`}
								className={`flex items-center px-3 py-2 rounded-lg text-sm ${
									location.pathname.includes(item.path)
										? "bg-blue-100 text-blue-700 font-medium"
										: "text-gray-600 hover:bg-gray-100"
								}`}
							>
								<item.icon className="w-5 h-5 mr-2" />
								{item.label}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
