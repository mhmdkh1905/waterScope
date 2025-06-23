// MapPage.jsx
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapPage = () => {
	return (
		<div className="min-h-screen bg-blue-50 p-6">
			<h2 className="text-2xl font-bold text-blue-700 mb-4">
				🗺 Sea of Galilee (Kinneret)
			</h2>

			<MapContainer
				center={[32.83, 35.58]}
				zoom={11}
				className="h-[600px] w-full rounded-lg shadow"
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; OpenStreetMap'
				/>
			</MapContainer>
		</div>
	);
};

export default MapPage;
