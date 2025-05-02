import React from 'react';
import { BarChart3, Table2 } from 'lucide-react';

const ViewToggle = ({ activeView, onViewChange }) => {
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button
        type="button"
        className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
          activeView === 'chart'
            ? 'bg-teal-50 text-teal-700 border-teal-200'
            : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
        }`}
        onClick={() => onViewChange('chart')}
      >
        <div className="flex items-center">
          <BarChart3 className="w-4 h-4 mr-2" />
          Chart View
        </div>
      </button>
      <button
        type="button"
        className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
          activeView === 'table'
            ? 'bg-teal-50 text-teal-700 border-teal-200'
            : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
        }`}
        onClick={() => onViewChange('table')}
      >
        <div className="flex items-center">
          <Table2 className="w-4 h-4 mr-2" />
          Table View
        </div>
      </button>
    </div>
  );
};

export default ViewToggle;