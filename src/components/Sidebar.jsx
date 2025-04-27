import React from 'react';
import { Home, Map, CloudRain, TrendingUp, Calendar, Database } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const navItems = [
    { name: 'Dashboard', path: '/', icon: Home },
    { name: 'Water Map', path: '/WaterMap', icon: Map },
    { name: 'Weather Data', path: '/WeatherData', icon: CloudRain },
    { name: 'Trends', path: '/Trends', icon: TrendingUp },
    { name: 'Historical Data', path: '/historical', icon: Calendar },
    { name: 'Data Sources', path: '/sources', icon: Database }
  ];

  return (
    <div className="w-52 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="text-blue-500">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
            </svg>
          </div>
          <span className="font-bold text-gray-800">WaterScope</span>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-3">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            const IconComponent = item.icon;
            
            return (
              <li key={item.name}>
                <a 
                  href={item.path}
                  className={`flex items-center space-x-2 py-1 ${
                    isActive 
                      ? 'text-blue-500 font-medium' 
                      : 'text-gray-600 hover:text-blue-500'
                  }`}
                >
                  <IconComponent size={18} />
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;