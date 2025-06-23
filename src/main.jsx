// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import 'leaflet/dist/leaflet.css';

//Components
import Home from "./components/Home";
import OverView from "./components/OverView";
import ArimaForcast from "./components/ArimaForcast";
import PCAAnalysis from "./components/PCAAnalysis";
import TrendAnalysis from "./components/TrendAnalysis";
import ClimateImpact from "./components/ClimateImpact";
import Data from "./components/Data";

//Pages
import MapPage from "./pages/MapPage";


const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/home", element: <Home /> },
			{ path: "/overView", element: <OverView /> },
			{ path: "/arimaForcast", element: <ArimaForcast /> },
			{ path: "/PCAAnalysis", element: <PCAAnalysis /> },
			{ path: "/trendAnalysis", element: <TrendAnalysis /> },
			{ path: "/climateImpact", element: <ClimateImpact /> },
			{ path: "/map", element: <MapPage /> },
			{ path: "/data", element: <Data /> },
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
