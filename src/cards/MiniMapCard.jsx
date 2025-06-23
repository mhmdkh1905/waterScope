import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom"; 
import "leaflet/dist/leaflet.css";

const MiniMapCard = () => {
	const mapRef = useRef();

	// Force Leaflet to recalculate size
	useEffect(() => {
		setTimeout(() => {
			if (mapRef.current) {
				mapRef.current.invalidateSize();
			}
		}, 200); // wait a bit after rendering
	}, []);

	return (
		<div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
			<h4 className="text-sm font-semibold text-blue-600 mb-2">🗺 Sea of Galilee Preview</h4>

			<div className="h-[200px] w-full rounded-lg overflow-hidden">
				<MapContainer
					center={[32.83, 35.58]}
					zoom={11}
					ref={mapRef}
					className="h-full w-full"
					scrollWheelZoom={false}
					dragging={false}
					doubleClickZoom={false}
					zoomControl={false}
				>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution='&copy; OpenStreetMap'
					/>
				</MapContainer>
			</div>

			<p className="text-xs text-gray-500 mt-2 text-right italic">
				Preview — <Link to="/map" className="text-blue-600 underline">View full map</Link>
			</p>
		</div>
	);
};

export default MiniMapCard;
