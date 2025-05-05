import React, { useEffect, useState } from 'react';
import WaterStationCardPanel from "./WaterStationCardPanel";
import TemperatureChart from "./TemperatureChart";
import RainfallChart from "./RainfallChart";
import StationCard from "./StationCard";
import { fetchWeatherForCity } from '../../services/weatherService';


const cities = [
  "Jerusalem",
  "Tel Aviv",
  "Haifa",
  "Tiberias",
  "Beer Sheva",
  "Eilat",
  "Nazareth",
  "Safed",
  "Acre",
  "Ashdod",
  "Ashkelon",
  "Rosh HaNikra"
];


export default function RealTimeData() {
  const [activeTab, setActiveTab] = useState("Temperature");
  const [allStations, setAllStations] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const data = await Promise.all(cities.map(fetchWeatherForCity));
      setAllStations(data);
    };

    fetchAll();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 md:px-10">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-teal-800 mb-1">Weather Data</h1>
        <p className="text-gray-500">Current and historical weather conditions across Israel</p>
      </div>
      
      {/* Weather Station Card Panel */}
      <div className="mb-8">
        <WaterStationCardPanel />
      </div>
      
      {/* Climate Trends Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-teal-800 mb-6">Climate Trends</h2>
        
        {/* Tabs */}
        <div className="mb-4 border-b border-gray-200">
          <div className="flex flex-wrap -mb-px">
            <button
              className={`mr-4 py-2 px-4 font-medium text-sm ${
                activeTab === "Temperature"
                  ? "text-teal-600 border-b-2 border-teal-500"
                  : "text-gray-500 hover:text-teal-500"
              }`}
              onClick={() => setActiveTab("Temperature")}
            >
              Temperature
            </button>
            <button
              className={`mr-4 py-2 px-4 font-medium text-sm ${
                activeTab === "Rainfall"
                  ? "text-teal-600 border-b-2 border-teal-500"
                  : "text-gray-500 hover:text-teal-500"
              }`}
              onClick={() => setActiveTab("Rainfall")}
            >
              Rainfall
            </button>
          </div>
        </div>
        
        {/* Chart Container */}
        <div>
          {activeTab === "Temperature" ? (
            <TemperatureChart />
          ) : (
            <RainfallChart />
          )}
        </div>
      </div>
      
      {/* All Weather Stations Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-teal-800 mb-6">All Weather Stations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allStations.map((station) => (
          <StationCard
            key={station.name}
            name={station.name}
            temperature={station.temperature}
            rainfall={station.rainfall}
            humidity={station.humidity}
            windSpeed={station.windSpeed}
          />
        ))}
      </div>
        
        </div>

    </div>
  );
}