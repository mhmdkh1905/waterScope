import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Trends = () => {
  const [selectedWaterSource, setSelectedWaterSource] = useState('Sea of Galilee');
  
  // Mock data for charts based on the images
  const waterLevelData = [
    { month: 'Apr 2023', level: -210.40 },
    { month: 'May 2023', level: -210.25 },
    { month: 'Jun 2023', level: -210.20 },
    { month: 'Jul 2023', level: -210.30 },
    { month: 'Aug 2023', level: -210.50 },
    { month: 'Sep 2023', level: -210.65 },
    { month: 'Oct 2023', level: -210.75 },
    { month: 'Nov 2023', level: -210.80 },
    { month: 'Dec 2023', level: -210.75 },
    { month: 'Jan 2024', level: -210.60 },
    { month: 'Feb 2024', level: -210.45 },
    { month: 'Mar 2024', level: -210.25 },
    { month: 'Apr 2024', level: -210.00 },
  ];
  
  const temperatureData = [
    { month: 'Apr 2023', north: 18, central: 21, south: 24 },
    { month: 'May 2023', north: 22, central: 24, south: 27 },
    { month: 'Jun 2023', north: 26, central: 27, south: 30 },
    { month: 'Jul 2023', north: 28, central: 30, south: 33 },
    { month: 'Aug 2023', north: 28, central: 30, south: 32 },
    { month: 'Sep 2023', north: 27, central: 28, south: 30 },
    { month: 'Oct 2023', north: 24, central: 25, south: 27 },
    { month: 'Nov 2023', north: 19, central: 21, south: 24 },
    { month: 'Dec 2023', north: 14, central: 16, south: 18 },
    { month: 'Jan 2024', north: 12, central: 14, south: 16 },
    { month: 'Feb 2024', north: 15, central: 17, south: 19 },
    { month: 'Mar 2024', north: 17, central: 19, south: 22 },
    { month: 'Apr 2024', north: 19, central: 21, south: 24 },
  ];
  
  const rainfallData = [
    { month: 'Apr 2023', north: 8, central: 5, south: 1 },
    { month: 'May 2023', north: 2, central: 1, south: 0 },
    { month: 'Jun 2023', north: 0, central: 0, south: 0 },
    { month: 'Jul 2023', north: 0, central: 0, south: 0 },
    { month: 'Aug 2023', north: 0, central: 0, south: 0 },
    { month: 'Sep 2023', north: 0, central: 0, south: 0 },
    { month: 'Oct 2023', north: 10, central: 8, south: 2 },
    { month: 'Nov 2023', north: 45, central: 35, south: 12 },
    { month: 'Dec 2023', north: 120, central: 95, south: 25 },
    { month: 'Jan 2024', north: 150, central: 120, south: 40 },
    { month: 'Feb 2024', north: 110, central: 85, south: 15 },
    { month: 'Mar 2024', north: 60, central: 40, south: 5 },
    { month: 'Apr 2024', north: 10, central: 7, south: 1 },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Trends & Analysis</h1>
              <p className="text-gray-600">Analyze historical water and climate data to identify patterns</p>
            </div>
            <div className="text-sm text-blue-600">Real-time water monitoring for Israel</div>
          </div>
          
          {/* Water Level Trends Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Water Level Trends</h2>
            
            <div className="mb-4">
              <select 
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={selectedWaterSource}
                onChange={(e) => setSelectedWaterSource(e.target.value)}
              >
                <option>Sea of Galilee</option>
                <option>Dead Sea</option>
                <option>Coastal Aquifer</option>
              </select>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-100 p-4">
              <h3 className="text-md font-medium mb-6">{selectedWaterSource} - Water Level Trends (2023-2024)</h3>
              
              <div className="h-64">
                <LineChart
                  width={1000}
                  height={250}
                  data={waterLevelData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[-211, -209.5]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="level" stroke="#0ea5e9" name="Water Level (m)" activeDot={{ r: 8 }} />
                </LineChart>
              </div>
            </div>
          </div>
          
          {/* Climate Trends Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Climate Trends</h2>
            
            <div className="mb-6">
              <div className="flex border-b">
                <button className="px-4 py-2 border-b-2 border-blue-500 font-medium text-sm">Regional Comparison</button>
                <button className="px-4 py-2 text-gray-500 font-medium text-sm">Climate-Water Correlation</button>
              </div>
            </div>
            
            {/* Temperature Chart */}
            <div className="bg-white rounded-lg mb-6">
              <h3 className="text-md font-medium mb-4">Temperature Comparison by Region</h3>
              <div className="text-sm text-gray-600 mb-4">Monthly Average Temperatures (2023-2024)</div>
              
              <div className="h-64">
                <LineChart
                  width={1000}
                  height={250}
                  data={temperatureData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis unit="°C" domain={[0, 36]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="north" stroke="#f97316" name="Northern Israel" />
                  <Line type="monotone" dataKey="central" stroke="#0ea5e9" name="Central Israel" />
                  <Line type="monotone" dataKey="south" stroke="#10b981" name="Southern Israel" />
                </LineChart>
              </div>
            </div>
            
            {/* Rainfall Chart */}
            <div className="bg-white rounded-lg mb-6">
              <h3 className="text-md font-medium mb-4">Rainfall Comparison by Region</h3>
              <div className="text-sm text-gray-600 mb-4">Monthly Rainfall (2023-2024)</div>
              
              <div className="h-64">
                <BarChart
                  width={1000}
                  height={250}
                  data={rainfallData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis unit="mm" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="north" fill="#0ea5e9" name="Northern Israel" />
                  <Bar dataKey="central" fill="#10b981" name="Central Israel" />
                  <Bar dataKey="south" fill="#f97316" name="Southern Israel" />
                </BarChart>
              </div>
            </div>
            
            {/* Key Insights Section */}
            <div>
              <h3 className="text-md font-medium mb-4">Key Insights</h3>
              
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
                <div className="font-medium text-blue-800 mb-1">Seasonal Patterns</div>
                <p className="text-blue-600 text-sm">
                  Data shows clear seasonal patterns with water levels rising during winter months (Nov-Feb) and declining during summer months (Jun-Sep), directly correlating with rainfall patterns.
                </p>
              </div>
              
              <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 mb-4">
                <div className="font-medium text-orange-800 mb-1">Regional Variations</div>
                <p className="text-orange-600 text-sm">
                  Northern Israel consistently receives significantly more rainfall than southern regions, resulting in more stable water sources in the north compared to the south.
                </p>
              </div>
              
              <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                <div className="font-medium text-red-800 mb-1">Climate Change Impact</div>
                <p className="text-red-600 text-sm">
                  Long-term data indicates a gradual increase in average temperatures and decrease in annual rainfall over the past decade, potentially leading to more water scarcity challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;