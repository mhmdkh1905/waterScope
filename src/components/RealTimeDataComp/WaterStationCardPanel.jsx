import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import { Thermometer, CloudRain, Droplet, Sun } from "lucide-react";

const cities = {
  "Tel Aviv": { lat: 32.0853, lon: 34.7818 },
  "Haifa": { lat: 32.7940, lon: 34.9896 },
  "Jerusalem": { lat: 31.7683, lon: 35.2137 },
  "Beersheba": { lat: 31.2518, lon: 34.7913 },
  "Eilat": { lat: 29.5581, lon: 34.9482 },
  "Nazareth": { lat: 32.6996, lon: 35.3035 },
  "Tiberias (Kinneret)": { lat: 32.7922, lon: 35.5312, bold: true },
  "Dead Sea": { lat: 31.5590, lon: 35.4732, bold: true },
  "Arad": { lat: 31.2603, lon: 35.2124 },
  "Akko": { lat: 32.9234, lon: 35.0716 },
  "Ashdod": { lat: 31.8014, lon: 34.6435 },
  "Safed": { lat: 32.9646, lon: 35.4961 },
};

export default function WaterStationCardPanel() {
  const [selectedCity, setSelectedCity] = useState("Tel Aviv");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const { lat, lon } = cities[selectedCity];
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,precipitation,relative_humidity_2m,evapotranspiration`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const current = data.current;
        setWeather({
          temperature: current.temperature_2m,
          rainfall: current.precipitation,
          humidity: current.relative_humidity_2m,
          evaporation: current.evapotranspiration,
        });
      });
  }, [selectedCity]);

  if (!weather) return <div>Loading...</div>;

  return (
    <div className="bg-white p-6 rounded-lg border border-teal-100 shadow-sm space-y-6">
      <div>
        <label className="block mb-2 font-medium text-teal-800">Weather Station</label>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 text-sm w-64"
        >
          {Object.keys(cities).map((city) => (
            <option
              key={city}
              value={city}
              style={{ fontWeight: cities[city].bold ? "bold" : "normal" }}
            >
              {city}
            </option>
          ))}
        </select>
      </div>

      <h2 className="text-xl font-semibold text-teal-700">{selectedCity}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <WeatherCard
          icon={<Thermometer size={32} />}
          label="Temperature"
          value={weather.temperature}
          unit="°C"
          iconColor="text-red-500"
        />
        <WeatherCard
          icon={<CloudRain size={28} />}
          label="Rainfall"
          value={weather.rainfall}
          unit="mm"
          iconColor="text-sky-500"
        />
        <WeatherCard
          icon={<Droplet size={28} />}
          label="Humidity"
          value={weather.humidity}
          unit="%"
          iconColor="text-cyan-500"
        />
        <WeatherCard
          icon={<Sun size={28} />}
          label="Evaporation"
          value={weather.evaporation}
          unit="mm/d"
          iconColor="text-yellow-500"
        />
      </div>
    </div>
  );
}
