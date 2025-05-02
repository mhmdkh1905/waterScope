// 1. Main Historical Trends Component
import React, { useState } from 'react';
import WaterLevelChart from './WaterLevelChart';
import WaterSourceSelector from './WaterSourceSelector';
import ViewToggle from './ViewToggle';

const HistoricalTrends = () => {
  const [selectedSource, setSelectedSource] = useState('Sea of Galilee');
  const [viewMode, setViewMode] = useState('chart'); // 'chart' or 'table'
  
  // Water sources available for selection
  const waterSources = [
    'Sea of Galilee',
    'Coastal Aquifer',
    'Mountain Aquifer',
    'Dead Sea',
    'Jordan River',
    'Yarkon-Taninim Aquifer'
  ];
  
  // Sample data - in a real app, this would be fetched based on selectedSource
  const waterLevelData = {
    'Sea of Galilee': [
      { month: 'Jan', level: 65 },
      { month: 'Feb', level: 68 },
      { month: 'Mar', level: 72 },
      { month: 'Apr', level: 70 },
      { month: 'May', level: 68 },
      { month: 'Jun', level: 75 },
      { month: 'Jul', level: 80 },
    ],
    'Coastal Aquifer': [
      { month: 'Jan', level: 45 },
      { month: 'Feb', level: 47 },
      { month: 'Mar', level: 50 },
      { month: 'Apr', level: 48 },
      { month: 'May', level: 45 },
      { month: 'Jun', level: 42 },
      { month: 'Jul', level: 40 },
    ],
    // Add data for other sources as needed
  };
  
  // If we don't have data for the selected source, use a default
  const chartData = waterLevelData[selectedSource] || waterLevelData['Sea of Galilee'];
  
  const handleSourceChange = (source) => {
    setSelectedSource(source);
  };
  
  const handleExportCSV = () => {
    console.log('Exporting CSV for', selectedSource);
    // Implement CSV export logic
  };
  
  const handleExportPDF = () => {
    console.log('Exporting PDF for', selectedSource);
    // Implement PDF export logic
  };
  
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 md:px-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-teal-800 mb-1">Historical Water Level Trends</h1>
        <p className="text-gray-500">Analyze how water levels have changed over time</p>
      </div>
      
      {/* Controls Section */}
      <div className="bg-white p-5 rounded-lg border border-teal-100 shadow-sm mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <WaterSourceSelector 
            sources={waterSources} 
            selected={selectedSource}
            onChange={handleSourceChange}
          />
        </div>
      </div>
      
      {/* Data Visualization Section */}
      <div className="bg-white p-5 rounded-lg border border-teal-100 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-700 mb-4">
          {selectedSource} - Water Level Trends
        </h2>
        
        <ViewToggle 
          activeView={viewMode} 
          onViewChange={setViewMode}
        />
        
        <div className="mt-6">
          {viewMode === 'chart' ? (
            <WaterLevelChart data={chartData} />
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity (%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {chartData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{item.month}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{item.level}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoricalTrends;