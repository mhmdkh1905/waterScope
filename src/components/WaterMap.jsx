import React, { useState } from 'react';
import Sidebar from './Sidebar';

function WaterMap() {
  const [activeTab, setActiveTab] = useState('Water Sources');
  
  // Fake water sources data
  const waterSources = [
    { name: 'Sea of Galilee', type: 'Lake', capacity: '85%' },
    { name: 'Coastal Aquifer', type: 'Aquifer', capacity: '68%' },
    { name: 'Mountain Aquifer', type: 'Aquifer', capacity: '72%' },
    { name: 'Yarkon-Taninim Aquifer', type: 'Aquifer', capacity: '65%' },
    { name: 'Dead Sea', type: 'Lake', capacity: '43%' },
  ];

  // Featured water source details
  const featuredSource = {
    name: 'Sea of Galilee',
    capacity: '85%',
    minLevel: '-215.5 m',
    currentLevel: '-209.96 m',
    maxLevel: '-208.8 m',
    weeklyChange: '+0.7%',
    type: 'Lake'
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Import the sidebar component */}
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
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6">
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-gray-800">Water Map</h1>
              <p className="text-gray-600">Explore water sources and weather stations across Israel</p>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-8 flex flex-col items-center justify-center text-center h-96">
              <h2 className="text-xl font-semibold mb-2">Interactive Map Coming Soon</h2>
              <p className="text-gray-600 mb-4">This will be replaced with an interactive map showing all water sources and weather stations across Israel.</p>
              <p className="text-gray-600">For now, you can select items from the data tables below to view their details.</p>
            </div>
          </div>
          
          {/* Right Panel */}
          <div className="w-80 border-l border-gray-200 bg-white overflow-y-auto">
            {/* Panel Header with Tabs */}
            <div className="border-b border-gray-200 flex">
              <button 
                className={`flex-1 py-3 text-center ${activeTab === 'Water Sources' ? 'text-blue-500 border-b-2 border-blue-500 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('Water Sources')}
              >
                Water Sources
              </button>
              <button 
                className={`flex-1 py-3 text-center ${activeTab === 'Weather' ? 'text-blue-500 border-b-2 border-blue-500 font-medium' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('Weather')}
              >
                Weather
              </button>
            </div>
            
            {/* Featured Water Source */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <div className="text-lg font-medium">{featuredSource.name}</div>
                <div className="text-blue-500">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
                  </svg>
                </div>
              </div>
              
              <div className="text-3xl font-bold mb-2">{featuredSource.capacity}</div>
              <p className="text-gray-500 text-sm mb-4">capacity</p>
              
              {/* Water Level Bar */}
              <div className="relative h-2 bg-gray-200 rounded-full mb-1">
                <div 
                  className="absolute top-0 left-0 h-full bg-blue-500 rounded-full" 
                  style={{ width: featuredSource.capacity }}
                ></div>
              </div>
              
              {/* Level Indicators */}
              <div className="flex justify-between text-xs text-gray-500 mb-4">
                <div>Min: {featuredSource.minLevel}</div>
                <div>Current: {featuredSource.currentLevel}</div>
                <div>Max: {featuredSource.maxLevel}</div>
              </div>
              
              {/* Type Tag */}
              <div className="inline-block bg-blue-100 text-blue-500 rounded-full px-3 py-1 text-xs">
                {featuredSource.type}
              </div>
              <div className="text-xs text-green-500 mt-2">
                Weekly change: {featuredSource.weeklyChange}
              </div>
            </div>
            
            {/* Water Sources List */}
            <div className="p-4">
              <div className="grid grid-cols-3 text-sm font-medium text-gray-500 mb-2">
                <div>Name</div>
                <div>Type</div>
                <div>Capacity</div>
              </div>
              
              {waterSources.map((source, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-3 text-sm py-3 border-b border-gray-100 hover:bg-gray-50"
                >
                  <div className="font-medium">{source.name}</div>
                  <div>{source.type}</div>
                  <div className={
                    parseInt(source.capacity) > 80 ? 'text-green-500' : 
                    parseInt(source.capacity) > 60 ? 'text-blue-500' : 
                    'text-orange-500'
                  }>
                    {source.capacity}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaterMap;