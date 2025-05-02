import React, { useState } from "react";
import WaterStationCardPanel from "./WaterStationCardPanel";
import TemperatureChart from "./TemperatureChart";
import RainfallChart from "./RainfallChart";
import StationCard from "./StationCard";

export default function RealTimeData() {
  const [activeTab, setActiveTab] = useState("Temperature");
  
  // All Weather Stations data
  const allStations = [
    {
      name: "Jerusalem",
      temperature: 26,
      rainfall: 0,
      humidity: 45,
      evaporation: 7.2,
    },
    {
      name: "Tel Aviv",
      temperature: 29,
      rainfall: 0,
      humidity: 65,
      evaporation: 6.8,
    },
    {
      name: "Haifa",
      temperature: 27,
      rainfall: 0,
      humidity: 70,
      evaporation: 5.9,
    },
    {
      name: "Beer Sheva",
      temperature: 31,
      rainfall: 0,
      humidity: 35,
      evaporation: 8.5,
    },
    {
      name: "Tiberias",
      temperature: 33,
      rainfall: 0,
      humidity: 50,
      evaporation: 9.1,
    }
  ];

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
            key={station.id}
            name={station.name}
            temperature={station.temperature}
            rainfall={station.rainfall}
            humidity={station.humidity}
            evaporation={station.evaporation}
          />
        ))}
      </div>
        
        </div>

    </div>
  );
}