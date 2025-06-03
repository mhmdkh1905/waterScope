import React, { useEffect, useState } from 'react';
import { database, ref, get, child } from "../../firebase";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const LaggedCorrelationPage = () => {
  const [correlations, setCorrelations] = useState({});

  useEffect(() => {
    const fetchAndProcessData = async () => {
      const dbRef = ref(database);
      const cities = [
        {
          name: 'haifa',
          rainPath: 'rainfall/haifa',
          levelPath: 'waterlevel2/kinneret'
        },
        {
          name: 'tellaviv',
          rainPath: 'rainfall/tellaviv',
          levelPath: 'waterlevel2/wholeisrael'
        },
        {
          name: 'arad',
          rainPath: 'rainfall/arad',
          levelPath: 'waterlevel2/deadsea'
        }
      ];

      const results = {};

      for (let { name, rainPath, levelPath } of cities) {
        try {
          const [rainSnap, levelSnap] = await Promise.all([
            get(child(dbRef, rainPath)),
            get(child(dbRef, levelPath))
          ]);

          const rainfallRaw = rainSnap.exists() ? rainSnap.val() : null;
          const waterRaw = levelSnap.exists() ? levelSnap.val() : null;

          if (!rainfallRaw || !waterRaw) {
            console.warn(`[WARN] Missing data for ${name}, skipping...`);
            continue;
          }

          const rainfall = [];
          Object.entries(rainfallRaw).forEach(([year, months]) => {
            Object.entries(months).forEach(([monthName, value]) => {
              if (value?.avgRainfall == null) return;
              const month = new Date(`${monthName} 1, ${year}`).getMonth() + 1;
              const date = `${year}-${month.toString().padStart(2, '0')}`;
              rainfall.push({ date, rainfall: parseFloat(value.avgRainfall) });
            });
          });

          const waterLevel = [];
          Object.entries(waterRaw).forEach(([year, months]) => {
            Object.entries(months).forEach(([monthName, value]) => {
              if (value?.avgRainfall == null) return;
              const month = new Date(`${monthName} 1, ${year}`).getMonth() + 1;
              const date = `${year}-${month.toString().padStart(2, '0')}`;
              waterLevel.push({ date, level: parseFloat(value.avgRainfall) });
            });
          });

          const merged = rainfall.map(r => {
            const match = waterLevel.find(w => w.date === r.date);
            return match ? { ...r, level: match.level } : null;
          }).filter(Boolean);

          const cityCorrelations = [];
          for (let lag = 0; lag <= 7; lag++) {
            const x = merged.slice(0, merged.length - lag).map(d => d.rainfall);
            const y = merged.slice(lag).map(d => d.level);
            const n = Math.min(x.length, y.length);
            if (n === 0) continue;

            const avgX = x.reduce((a, b) => a + b, 0) / n;
            const avgY = y.reduce((a, b) => a + b, 0) / n;

            let num = 0, denX = 0, denY = 0;
            for (let i = 0; i < n; i++) {
              num += (x[i] - avgX) * (y[i] - avgY);
              denX += (x[i] - avgX) ** 2;
              denY += (y[i] - avgY) ** 2;
            }

            const corr = num / Math.sqrt(denX * denY);
            cityCorrelations.push({ lag, correlation: parseFloat(corr.toFixed(4)) });
          }

          results[name] = cityCorrelations;
        } catch (error) {
          console.error(`[ERROR] Failed to process ${name}:`, error);
        }
      }

      setCorrelations(results);
    };

    fetchAndProcessData();
  }, []);

  const renderChart = (data, title) => (
    <div className="bg-white p-6 rounded shadow border border-teal-100 mb-6">
      <h2 className="text-xl font-semibold text-teal-700 mb-4">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="lag" label={{ value: 'Lag (months)', position: 'insideBottomRight', offset: -5 }} />
          <YAxis domain={[-1, 1]} />
          <Tooltip />
          <Line type="monotone" dataKey="correlation" stroke="#14b8a6" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 md:px-10">
      <h1 className="text-3xl font-bold text-teal-800 mb-4">Rainfall vs. Water Level – Time-Lagged Correlation</h1>
      <p className="text-gray-600 mb-6 max-w-3xl">
        This page compares rainfall from Haifa, Tel Aviv, and Arad with water levels in Kinneret, Whole Israel, and Dead Sea.
        The goal is to find how many months later water levels react to rainfall.
      </p>

      {renderChart(correlations.haifa, 'Haifa Rainfall vs. Kinneret Water Level')}
      {renderChart(correlations.tellaviv, 'Tel Aviv Rainfall vs. Whole Israel Water Level')}
      {renderChart(correlations.arad, 'Arad Rainfall vs. Dead Sea Water Level')}
    </div>
  );
};

export default LaggedCorrelationPage;
