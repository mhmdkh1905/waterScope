import React, { useState } from 'react';
import {ChevronDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Sidebar from './Sidebar';


// Weather Station Card Component
const WeatherStationCard = ({ station }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium">{station.name}</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3v18m-9-9h18" />
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center text-red-500 mb-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
            </svg>
            <span className="text-gray-500 text-sm ml-1">Temp</span>
          </div>
          <p className="font-bold text-lg">{station.temperature}°C</p>
        </div>
        
        <div>
          <div className="flex items-center text-blue-400 mb-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M2 10h20M2 14h20M12 2v20" />
            </svg>
            <span className="text-gray-500 text-sm ml-1">Rain</span>
          </div>
          <p className="font-bold text-lg">{station.rain} mm</p>
        </div>
        
        <div>
          <div className="flex items-center text-blue-500 mb-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
            </svg>
            <span className="text-gray-500 text-sm ml-1">Humidity</span>
          </div>
          <p className="font-bold text-lg">{station.humidity}%</p>
        </div>
        
        <div>
          <div className="flex items-center text-yellow-500 mb-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <span className="text-gray-500 text-sm ml-1">Evapor.</span>
          </div>
          <p className="font-bold text-lg">{station.evaporation} mm/d</p>
        </div>
      </div>
    </div>
  );
};

export default function WeatherData() {
  const [selectedStation, setSelectedStation] = useState('Tiberias');
  
  // Sample temperature chart data
  const tempChartData = [
    { month: 'Apr 2023', northern: 18, central: 20, southern: 22 },
    { month: 'May 2023', northern: 22, central: 23, southern: 27 },
    { month: 'Jun 2023', northern: 25, central: 26, southern: 30 },
    { month: 'Jul 2023', northern: 28, central: 29, southern: 34 },
    { month: 'Aug 2023', northern: 29, central: 30, southern: 35 },
    { month: 'Sep 2023', northern: 27, central: 28, southern: 33 },
    { month: 'Oct 2023', northern: 24, central: 25, southern: 28 },
    { month: 'Nov 2023', northern: 19, central: 21, southern: 23 },
    { month: 'Dec 2023', northern: 15, central: 17, southern: 19 },
    { month: 'Jan 2024', northern: 12, central: 14, southern: 16 },
    { month: 'Feb 2024', northern: 14, central: 16, southern: 18 },
    { month: 'Mar 2024', northern: 17, central: 19, southern: 21 },
    { month: 'Apr 2024', northern: 20, central: 22, southern: 24 },
  ];
  
  // Featured weather station data
  const stationData = {
    name: 'Tiberias',
    temperature: '33',
    rainfall: '0',
    humidity: '50',
    evaporation: '9.1'
  };
  
  // All weather stations data
  const allStations = [
    { name: 'Jerusalem', temperature: '26', rain: '0', humidity: '45', evaporation: '7.2' },
    { name: 'Tel Aviv', temperature: '29', rain: '0', humidity: '65', evaporation: '6.8' },
    { name: 'Haifa', temperature: '27', rain: '0', humidity: '70', evaporation: '5.9' },
    { name: 'Beer Sheva', temperature: '31', rain: '0', humidity: '35', evaporation: '8.5' },
    { name: 'Tiberias', temperature: '33', rain: '0', humidity: '50', evaporation: '9.1' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-blue-500">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
              </svg>
            </div>
            <span className="font-bold text-xl text-gray-800">WaterScope</span>
          </div>
          <div className="text-sm text-gray-500">
            Real-time water monitoring for Israel
          </div>
        </header>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Weather Data</h1>
            <p className="text-gray-600">Current and historical weather conditions across Israel</p>
          </div>
          
          {/* Weather Station Selection */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-medium mb-4">Weather Station</h2>
            
            <div className="relative w-64 mb-6">
              <select 
                className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedStation}
                onChange={(e) => setSelectedStation(e.target.value)}
              >
                <option value="Tiberias">Tiberias</option>
                <option value="Jerusalem">Jerusalem</option>
                <option value="Tel Aviv">Tel Aviv</option>
                <option value="Haifa">Haifa</option>
                <option value="Beer Sheva">Beer Sheva</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown size={16} />
              </div>
            </div>
            
            <h2 className="text-xl font-semibold mb-6">{selectedStation}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Temperature */}
              <div className="bg-white rounded-lg border border-gray-100 p-4 flex flex-col items-center">
                <div className="text-red-500 mb-1">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                  </svg>
                </div>
                <span className="text-gray-500 text-sm mb-1">Temperature</span>
                <span className="text-2xl font-bold">33°C</span>
              </div>
              
              {/* Rainfall */}
              <div className="bg-white rounded-lg border border-gray-100 p-4 flex flex-col items-center">
                <div className="text-blue-400 mb-1">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 16.2A6 6 0 0 0 16 8a6 6 0 0 0-12 1c0 4.4 3.6 8 8 8 .6 0 1-.4 1-1s-.4-1-1-1a6 6 0 0 1-6-6c0-3.3 2.7-6 6-6 2.6 0 4.8 1.7 5.6 4H16a4 4 0 0 1 4 4c0 1.1-.4 2.1-1.2 2.8" />
                    <path d="M8 16l-3 4h14l-3-4m-8 0v4m4-4v4" />
                  </svg>
                </div>
                <span className="text-gray-500 text-sm mb-1">Rainfall</span>
                <span className="text-2xl font-bold">0 mm</span>
              </div>
              
              {/* Humidity */}
              <div className="bg-white rounded-lg border border-gray-100 p-4 flex flex-col items-center">
                <div className="text-blue-500 mb-1">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
                  </svg>
                </div>
                <span className="text-gray-500 text-sm mb-1">Humidity</span>
                <span className="text-2xl font-bold">50%</span>
              </div>
              
              {/* Evaporation */}
              <div className="bg-white rounded-lg border border-gray-100 p-4 flex flex-col items-center">
                <div className="text-yellow-500 mb-1">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                </div>
                <span className="text-gray-500 text-sm mb-1">Evaporation</span>
                <span className="text-2xl font-bold">9.1 mm/d</span>
              </div>
            </div>
          </div>
          
          {/* Climate Trends Section */}
          <h2 className="text-xl font-bold text-gray-800 mb-4">Climate Trends</h2>
          
          {/* Temperature Chart */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h3 className="text-lg font-medium mb-4">Monthly Average Temperatures (2023-2024)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={tempChartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" 
                    tickFormatter={(value) => {
                      // Shorten month names for mobile view
                      return value.split(' ')[0].substring(0, 3);
                    }}
                  />
                  <YAxis 
                    domain={[0, 'dataMax + 5']}
                    tickCount={5}
                    label={{ 
                      value: 'Temperature (°C)', 
                      angle: -90, 
                      position: 'insideLeft',
                      style: { textAnchor: 'middle' }
                    }} 
                  />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="northern" 
                    name="Northern Israel" 
                    stroke="#f97316" 
                    activeDot={{ r: 8 }} 
                    dot={{ r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="central" 
                    name="Central Israel" 
                    stroke="#3b82f6" 
                    activeDot={{ r: 8 }} 
                    dot={{ r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="southern" 
                    name="Southern Israel" 
                    stroke="#0ea5e9" 
                    activeDot={{ r: 8 }} 
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* All Weather Stations */}
          <h2 className="text-xl font-bold text-gray-800 mb-4">All Weather Stations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {allStations.map((station) => (
              <WeatherStationCard key={station.name} station={station} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}