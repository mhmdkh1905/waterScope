import React, { useEffect, useState } from 'react';
import { database, ref, get, child } from '../../firebase'; // adjust path if needed

const WaterSourceInfoPanel = ({ selectedSource }) => {
  const [capacity, setCapacity] = useState(null);

  useEffect(() => {
    if (!selectedSource) return;

    const fetchCapacity = async () => {
      const sourceKeyMap = {
        'Dead Sea': 'deadsea',
        'Sea of Galilee': 'kinneret',
      };

      const dbKey = sourceKeyMap[selectedSource.name];
      if (!dbKey) {
        setCapacity(null);
        return;
      }

      try {
        const dbRef = ref(database);
        const snap = await get(child(dbRef, `waterlevel2/${dbKey}/2025`));
        if (snap.exists()) {
          const monthly = Object.values(snap.val());
          const latest = monthly.at(-1); // get the last month (latest data)
          setCapacity(latest?.avgRainfall || null);
        } else {
          setCapacity(null);
        }
      } catch (err) {
        console.error('[ERROR] Fetching capacity:', err);
        setCapacity(null);
      }
    };

    fetchCapacity();
  }, [selectedSource]);

  if (!selectedSource) return null;

  return (
    <div className="border rounded-lg p-4 shadow bg-white">
      <h2 className="text-lg font-semibold text-teal-700 mb-2">{selectedSource.name}</h2>
      <div className="text-sm mb-1">
        <span className="font-medium">Type:</span> {selectedSource.type}
      </div>
      <div className="text-sm mb-2">
        <span className="font-medium">Status:</span>{' '}
        <span className={selectedSource.status === 'Drying' ? 'text-red-500' : 'text-green-600'}>
          {selectedSource.status}
        </span>
      </div>

      <div className="mb-2">
        <span className="text-sm font-medium">Current Capacity:</span>
        <div className="w-full bg-gray-200 h-4 rounded mt-1">
          <div
            className="bg-teal-500 h-4 rounded text-xs text-center text-white"
            style={{ width: capacity ? `${capacity}%` : '0%' }}
          >
            {capacity !== null ? `${capacity}%` : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterSourceInfoPanel;
