import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/HomePage.jsx";
import WaterMap from "./components/WaterMap.jsx";
import WeatherData from "./components/WeatherData.jsx";
import Trends from "./components/Trends.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/waterMap",
    element: <WaterMap />,
  },
  {
    path: "/WeatherData",
    element: <WeatherData />,
  },
  {
    path: "/Trends",
    element: <Trends />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);