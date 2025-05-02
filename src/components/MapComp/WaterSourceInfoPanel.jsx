import React from "react";
import { MapPin, Droplets } from "lucide-react";

export default function WaterSourceInfoPanel({ selectedSource, getStatusColor, getCapacityColor }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white border border-teal-100 rounded-lg p-6 shadow-sm">
        <div className="text-center mb-4">
          <MapPin className="w-6 h-6 text-teal-500 mx-auto mb-2" />
          <h3 className="text-xl font-semibold text-teal-700">
            {selectedSource ? selectedSource.name : "Select a Water Source"}
          </h3>
        </div>

        {selectedSource ? (
          <div>
            <div className="mb-4 px-4 py-3 bg-teal-50 rounded-md">
              <div className="mb-2">
                <span className="text-sm text-gray-600">Type:</span>
                <span className="ml-2 font-medium text-teal-700">{selectedSource.type}</span>
              </div>
              <div className="mb-2">
                <span className="text-sm text-gray-600">Status:</span>
                <span className={`ml-2 font-medium ${getStatusColor(selectedSource.status)}`}>
                  {selectedSource.status}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-600 mb-2 flex items-center">
                <Droplets className="w-4 h-4 mr-1" /> Current Capacity
              </h4>
              <div className="relative h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-teal-500 rounded-full"
                  style={{ width: selectedSource.capacity }}
                ></div>
                <span
                  className={`absolute inset-0 flex items-center justify-center text-sm font-bold ${getCapacityColor(
                    selectedSource.capacity
                  )}`}
                >
                  {selectedSource.capacity}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 py-4">
            <p>Select a water source from the map to view detailed information.</p>
          </div>
        )}
      </div>
    </div>
  );
}