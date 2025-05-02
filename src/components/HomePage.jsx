import React from 'react';
import { Database, MapPin, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center">
      <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('https://cdn.mos.cms.futurecdn.net/K6WmxeWt9gT5CcQQRKUuQM-1200-80.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-r from-waterscope-500/70 to-waterscope-300/50 backdrop-blur-sm"></div>
          </div>
        </div>
        
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              WaterScope
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Monitoring Israel's Water Sources in Real Time
            </p>
            <Link to = "/map">
            <button className="px-6 py-3 bg-white text-teal-600 font-medium rounded-md hover:bg-teal-50 transition-colors cursor-pointer">
              Explore Data
            </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-teal-800">
            Explore Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Real-Time Data Card */}
            <div className="bg-white p-6 rounded-lg border border-teal-500/70 shadow-sm hover:shadow-md transition-shadow ">
              <div className="mb-4">
                <h3 className="flex items-center text-teal-600 text-xl font-semibold mb-2">
                  <Database className="mr-2 h-5 w-5" />
                  Real-Time Data
                </h3>
                <p className="text-gray-500 text-sm">
                  Live monitoring of water levels and conditions
                </p>
              </div>
              <div className="mb-6">
                <p className="text-gray-600">
                  Access up-to-the-minute data on Israel's key water sources, including capacity levels and recent changes.
                </p>
              </div>
              <div>
                <Link to = "/realTimeData">
                <button className="w-full bg-teal-50 text-teal-800 font-semibold py-2 rounded-md hover:bg-teal-100 transition cursor-pointer">
                  View Dashboard
                </button>
                </Link>
              </div>
            </div>
            
            {/* Interactive Map Card */}
            <div className="bg-white p-6 rounded-lg border border-teal-500/70 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="flex items-center text-teal-600 text-xl font-semibold mb-2">
                  <MapPin className="mr-2 h-5 w-5" />
                  Interactive Map
                </h3>
                <p className="text-gray-500 text-sm">
                  Geographic visualization of water sources
                </p>
              </div>
              <div className="mb-6">
                <p className="text-gray-600">
                  Explore water sources across Israel through an interactive map with detailed information on each location.
                </p>
              </div>
              <div>
                <Link to = "/map">
                <button className="w-full bg-teal-50 text-teal-800 font-semibold py-2 rounded-md hover:bg-teal-100 transition cursor-pointer">
                  Open Map
                </button>
                </Link>
              </div>
            </div>
            
            {/* Historical Trends Card */}
            <div className="bg-white p-6 rounded-lg border border-teal-500/70 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="flex items-center text-teal-600 text-xl font-semibold mb-2">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Historical Trends
                </h3>
                <p className="text-gray-500 text-sm">
                  Long-term water level analysis
                </p>
              </div>
              <div className="mb-6">
                <p className="text-gray-600">
                  Study historical patterns and trends to understand how water sources have changed over time and predict future scenarios.
                </p>
              </div>
              <div>
                <Link to = "/historicalTrends">
                <button className="w-full bg-teal-50 text-teal-800 font-semibold py-2 rounded-md hover:bg-teal-100 transition cursor-pointer">
                  View Trends
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mission Statement */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-teal-600">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            WaterScope aims to provide transparent, accurate data on Israel's water resources,
            helping researchers, policy makers, and citizens understand the impact of climate 
            change and human activity on this precious resource.
          </p>
          <Link to = "/about">
          <button className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
            Learn More About Us
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}