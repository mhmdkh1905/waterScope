import React from 'react';
import { ChevronDown } from 'lucide-react';

const WaterSourceSelector = ({ sources, selected, onChange }) => {
  return (
    <div className="w-full md:w-64">
      <label className="block mb-2 font-medium text-teal-800">
        Water Source
      </label>
      <div className="relative">
        <select
          value={selected}
          onChange={(e) => onChange(e.target.value)}
          className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 appearance-none"
        >
          {sources.map((source) => (
            <option key={source} value={source}>
              {source}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default WaterSourceSelector;