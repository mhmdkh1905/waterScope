import React, {useEffect , useState } from "react";
import WeatherCard from "./WeatherCard";
import { fetchWeatherForCity } from "../../services/weatherService";
import {
  Thermometer,
  CloudRain,
  Droplet,
  Wind,
} from "lucide-react";

const cityNames = [
  "Jerusalem",
  "Tel Aviv",
  "Haifa",
  "Tiberias",
  "Beer Sheva",
  "Eilat",
  "Nazareth",
  "Safed",
  "Acre",
  "Ashdod",
  "Ashkelon",
  "Rosh HaNikra"
];



export default function WaterStationCardPanel() {
  const [waterSources, setWaterSources] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      const data = await Promise.all(cityNames.map(fetchWeatherForCity));
      setWaterSources(data);
      setSelected(data[0]); // default selected
    };
    fetchAll();
  }, []);

  if (!selected) return <p className="text-gray-500">Loading data...</p>;


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
        icon={<Wind size={28} />}
        label="Wind Speed"
        value={selected.windSpeed.toFixed(1)}
        unit="m/s"
        iconColor="text-blue-500"
      />
    </div>
  </div>
);
}
