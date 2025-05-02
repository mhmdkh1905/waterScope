import React from "react";
import { Thermometer, CloudRain, Droplet, Sun } from "lucide-react";

// This component receives station data as props
const StationCard = ({ 
  name, 
  temperature, 
  rainfall, 
  humidity, 
  evaporation,
}) => {
  return (
    <div 
      className="bg-white rounded-lg border border-teal-100 shadow-sm"
    >
      {/* Station Name Header */}
      <div className="p-3 border-b border-gray-100 flex justify-between items-center">
        <h3 className="font-medium text-teal-800">{name}</h3>
        <CloudRain className="w-5 h-5 text-gray-400" />
      </div>
      
      {/* Weather Data Grid */}
      <div className="p-3 grid grid-cols-2 gap-3">
        <div className="flex items-center space-x-2">
          <Thermometer className="w-4 h-4 text-red-500" />
          <span className="text-sm text-gray-500">Temp</span>
        </div>
        <div className="text-right font-bold">
          {temperature}°C
        </div>
        
        <div className="flex items-center space-x-2">
          <CloudRain className="w-4 h-4 text-sky-500" />
          <span className="text-sm text-gray-500">Rain</span>
        </div>
        <div className="text-right font-bold">
          {rainfall} mm
        </div>
        
        <div className="flex items-center space-x-2">
          <Droplet className="w-4 h-4 text-cyan-500" />
          <span className="text-sm text-gray-500">Humidity</span>
        </div>
        <div className="text-right font-bold">
          {humidity}%
        </div>
        
        <div className="flex items-center space-x-2">
          <Sun className="w-4 h-4 text-yellow-500" />
          <span className="text-sm text-gray-500">Evapor.</span>
        </div>
        <div className="text-right font-bold">
          {evaporation} mm/d
        </div>
      </div>
    </div>
  );
};

export default StationCard;