import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import {
  Thermometer,
  CloudRain,
  Droplet,
  Sun,
} from "lucide-react";

// Example water source data
const waterSources = [
  {
    name: "Jerusalem",
    temperature: 26,
    rainfall: 0,
    humidity: 45,
    evaporation: 7.2,
  },
  {
    name: "Tel Aviv",
    temperature: 28,
    rainfall: 2.1,
    humidity: 55,
    evaporation: 6.8,
  },
  {
    name: "Haifa",
    temperature: 24,
    rainfall: 1.2,
    humidity: 60,
    evaporation: 6.5,
  },
];

export default function WaterStationCardPanel() {
  const [selected, setSelected] = useState(waterSources[0]);

  return (
    <div className="bg-white p-6 rounded-lg border border-teal-100 shadow-sm space-y-6">
      {/* Dropdown */}
      <div>
        <label className="block mb-2 font-medium text-teal-800">Weather Station</label>
        <select
          value={selected.name}
          onChange={(e) => {
            const station = waterSources.find(w => w.name === e.target.value);
            setSelected(station);
          }}
          className="border border-gray-300 rounded-md px-4 py-2 text-sm w-64"
        >
          {waterSources.map((source) => (
            <option key={source.name} value={source.name}>
              {source.name}
            </option>
          ))}
        </select>
      </div>

      {/* Location title */}
      <h2 className="text-xl font-semibold text-teal-700">{selected.name}</h2>

      {/* Weather Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <WeatherCard
  icon={<Thermometer size={32} />}
  label="Temperature"
  value={selected.temperature}
  unit="°C"
  iconColor="text-red-500"
/>
<WeatherCard
  icon={<CloudRain size={28} />}
  label="Rainfall"
  value={selected.rainfall}
  unit="mm"
  iconColor="text-sky-500"
/>
<WeatherCard
  icon={<Droplet size={28} />}
  label="Humidity"
  value={selected.humidity}
  unit="%"
  iconColor="text-cyan-500"
/>
<WeatherCard
  icon={<Sun size={28} />}
  label="Evaporation"
  value={selected.evaporation}
  unit="mm/d"
  iconColor="text-yellow-500"
/>
      </div>
    </div>
  );
}
