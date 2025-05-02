import React from "react";

export default function WaterSourcesTable({ waterSources, selectedSource, setSelectedSource, getCapacityColor }) {
  return (
    <div className="bg-white border border-teal-100 rounded-lg p-4 shadow-sm mb-6">
      <h4 className="text-md font-semibold text-teal-700 mb-3">Water Sources Overview</h4>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {waterSources.map((source) => (
              <tr
                key={source.id}
                className={`cursor-pointer hover:bg-gray-50 ${
                  selectedSource && selectedSource.id === source.id ? "bg-teal-50" : ""
                }`}
                onClick={() => setSelectedSource(source)}
              >
                <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{source.name}</td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{source.type}</td>
                <td className={`px-3 py-2 whitespace-nowrap text-sm font-medium ${getCapacityColor(source.capacity)}`}>
                  {source.capacity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}