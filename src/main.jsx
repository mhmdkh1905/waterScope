//import { app } from './firebase.js';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/HomePage.jsx";
import Map from "./components/MapComp/Map.jsx";
import RealTimeData from "./components/RealTimeDataComp/RealTimeData.jsx";
import HistoricalTrends from "./components/HistoricalTrendsComp/HistoricalTrends.jsx";
import LaggedCorrelationPage from "./components/HistoricalTrendsComp/LaggedCorrelationPage.jsx";
import About from "./components/About.jsx";
import Index from "./index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />, // <- Header and Footer here
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/map", element: <Map /> },
      { path: "/realTimeData", element: <RealTimeData /> },
      { path: "/historicalTrends", element: <LaggedCorrelationPage /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);