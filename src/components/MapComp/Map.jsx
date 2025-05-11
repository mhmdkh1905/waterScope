import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Filter } from "lucide-react";
import WaterSourcesTable from "./WaterSourcesTable";
import WaterSourceInfoPanel from "./WaterSourceInfoPanel";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Remove default marker
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function Map() {
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("All");
  const [selectedSource, setSelectedSource] = useState(null);

  const waterSources = [
    { id: 1, name: "Sea of Galilee", type: "Lake", status: "Normal", capacity: "85%", lat: 32.833, lng: 35.588 },
    { id: 2, name: "Coastal Aquifer", type: "Aquifer", status: "Low", capacity: "68%", lat: 31.9, lng: 34.7 },
    { id: 3, name: "Mountain Aquifer", type: "Aquifer", status: "Normal", capacity: "72%", lat: 32.0, lng: 35.2 },
    { id: 4, name: "Dead Sea", type: "Sea", status: "Drying", capacity: "45%", lat: 31.5, lng: 35.5 },
    { id: 5, name: "Lake Hula", type: "Lake", status: "Normal", capacity: "78%", lat: 33.1, lng: 35.6 },
    { id: 6, name: "Yarkon-Taninim Aquifer", type: "Aquifer", status: "Warning", capacity: "76%", lat: 32.15, lng: 34.9 },
  ];

  const govMapLinks = [
    {
      label: "מפת מעיינות",
      href: "https://govmap.gov.il/?c=248979.26,655192.82&z=1&b=0&lay=SPRINGS",
    },
    {
      label: "מפת רגישות הידרולוגית",
      href: "https://www.govmap.gov.il/?c=227471.85,593990.58&z=0&lay=LANDSSENSITIVITY",
    },
    {
      label: "סטטוס מעקב מקורות זיהום מים",
      href: "https://govmap.gov.il/?c=244216.75,702421.04&z=1&b=0&lay=WTRPLNSTS",
    },
    {
      label: "מאגרי קולחין",
      href: "https://govmap.gov.il/?c=223736.39,719110.74&z=3&b=0&lay=PURIFIED_DRAINAGE_PONDS&bs=PURIFIED_DRAINAGE_PONDS%7C219595.82090814,720726.62040827",
    },
    {
      label: "מפת מתקנים הידרומטריים",
      href: "https://govmap.gov.il/?c=242811.28,737211.63&z=3&lay=HYDRO_STATION,WTRPLNSTS,MIFLASIM,HYDRO_STATION_BASIN,GROUNDWATER_ENRICHMENT_ZONES,LANDSSENSITIVITY&bs=HYDRO_STATION,GROUNDWATER_ENRICHMENT_ZONES,LANDSSENSITIVITY%7C251300,743218",
    },
    {
      label: "מפת מפלסי מי תהום",
      href: "https://govmap.gov.il/?c=187331.22,651058.7&z=3&b=0&lay=MIFLASIM",
    },
  ];

  const resetFilters = () => {
    setType("All");
    setStatus("All");
    setSelectedSource(null);
  };

  const filteredSources = waterSources.filter((source) => {
    const typeMatch = type === "All" || source.type === type;
    const statusMatch = status === "All" || source.status === status;
    return typeMatch && statusMatch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Normal": return "text-green-600";
      case "Low": return "text-yellow-600";
      case "Warning": return "text-orange-500";
      case "Drying": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getCapacityColor = (capacity) => {
    const value = parseInt(capacity);
    if (value >= 80) return "text-green-600";
    if (value >= 70) return "text-teal-600";
    if (value >= 60) return "text-blue-600";
    if (value >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  const getMarkerIcon = (status) => {
    let fillColor;
    switch (status) {
      case "Normal": fillColor = "#16a34a"; break;
      case "Low": fillColor = "#eab308"; break;
      case "Warning": fillColor = "#f97316"; break;
      case "Drying": fillColor = "#dc2626"; break;
      default: fillColor = "#6b7280";
    }
    return L.divIcon({
      className: "",
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
      html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="32" height="32" fill="${fillColor}">
        <path d="M192 0C86 0 0 86 0 192c0 77.7 111.5 204.5 168.3 267.1a24 24 0 0 0 35.4 0C272.5 396.5 384 269.7 384 192 384 86 298 0 192 0zm0 272a80 80 0 1 1 0-160 80 80 0 0 1 0 160z"/></svg>`
    });
  };

  return (
    <div className="bg-sky-50 min-h-screen py-8 px-4 md:px-10">
      <h1 className="text-3xl font-bold text-teal-800 mb-6 text-center">
        Interactive Water Source Map
      </h1>

      {/* GovMap Card Links */}
      <div className="overflow-x-auto mb-8">
        <div className="flex gap-4 w-max">
          {govMapLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-64 flex-shrink-0 border border-teal-200 bg-white rounded-lg p-4 text-center shadow hover:shadow-md transition"
            >
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="48" height="48" fill="#0f172a" className="mx-auto">
                  <path d="M192 0C86 0 0 86 0 192c0 77.7 111.5 204.5 168.3 267.1a24 24 0 0 0 35.4 0C272.5 396.5 384 269.7 384 192 384 86 298 0 192 0zm0 272a80 80 0 1 1 0-160 80 80 0 0 1 0 160z" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-teal-800">{item.label}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Filters + Reset */}
      <div className="bg-white rounded-lg shadow p-4 mb-6 flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-center">
        <div>
          <label className="block text-sm font-medium text-teal-700 mb-1">Filter by Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)} className="rounded-md border border-gray-300 px-4 py-2 w-48 bg-white text-sm">
            <option value="All">All Types</option>
            <option value="Lake">Lake</option>
            <option value="Aquifer">Aquifer</option>
            <option value="River">River</option>
            <option value="Sea">Sea</option>
            <option value="Reservoir">Reservoir</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-teal-700 mb-1">Filter by Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="rounded-md border border-gray-300 px-4 py-2 w-48 bg-white text-sm">
            <option value="All">All Statuses</option>
            <option value="Normal">Normal</option>
            <option value="Low">Low</option>
            <option value="Warning">Warning</option>
            <option value="Drying">Drying</option>
          </select>
        </div>
        <button onClick={resetFilters} className="mt-2 md:mt-6 flex items-center gap-2 px-4 py-2 bg-white border border-teal-500 text-teal-600 text-sm rounded-md hover:bg-teal-50 transition">
          <Filter className="w-4 h-4" /> Reset Filters
        </button>
      </div>

      {/* Map + Side Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-lg shadow overflow-hidden border border-teal-100">
          <MapContainer center={[31.8, 35.2]} zoom={8} scrollWheelZoom style={{ height: "500px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {filteredSources.map((source) => (
              <Marker key={source.id} position={[source.lat, source.lng]} icon={getMarkerIcon(source.status)}
                eventHandlers={{ click: () => setSelectedSource(source) }}>
                <Popup>
                  <strong>{source.name}</strong><br />
                  Status: {source.status}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div className="p-4 md:p-6 lg:p-8 space-y-6 bg-white rounded-xl shadow border border-teal-100">
          <WaterSourceInfoPanel
            selectedSource={selectedSource}
            getStatusColor={getStatusColor}
            getCapacityColor={getCapacityColor}
          />
          <WaterSourcesTable
            waterSources={waterSources}
            selectedSource={selectedSource}
            setSelectedSource={setSelectedSource}
            getCapacityColor={getCapacityColor}
          />
        </div>
      </div>
    </div>
  );
}
