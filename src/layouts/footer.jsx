import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* WaterScope section */}
          <div>
            <h3 className="text-lg font-semibold text-teal-600 mb-4">WaterScope</h3>
            <p className="text-sm text-gray-500">
              Monitoring Israel's water sources in real-time with precision and clarity.
            </p>
          </div>
          
          {/* Navigation section */}
          <div>
            <h3 className="text-lg font-semibold text-teal-600 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/home" className="text-sm text-gray-500 hover:text-teal-500 transition-colors">Home</Link></li>
              <li><Link to="/map" className="text-sm text-gray-500 hover:text-teal-500 transition-colors">Interactive Map</Link></li>
              <li><Link to="/realTimeData" className="text-sm text-gray-500 hover:text-teal-500 transition-colors">Real-Time Data</Link></li>
              <li><Link to="/historicalTrends" className="text-sm text-gray-500 hover:text-teal-500 transition-colors">Historical Trends</Link></li>
              <li><Link to="/about" className="text-sm text-gray-500 hover:text-teal-500 transition-colors">About</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Footer bottom section with copyright and links */}
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} WaterScope. Created by Mohammad Khateeb & Jad Taha.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-gray-500 hover:text-teal-500 transition-colors">
              GitHub
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-teal-500 transition-colors">
              Contact
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-teal-500 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}