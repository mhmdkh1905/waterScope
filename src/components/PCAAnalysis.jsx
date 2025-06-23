import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
import pcaData from "../data/pca_results.json"; // ← Make sure to export PCA results to this file

const PCAAnalysis = () => {
  const total = pcaData.reduce((sum, item) => sum + item.variance, 0);

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">📊 PCA Analysis</h1>

      <p className="text-gray-700">
        Principal Component Analysis (PCA) helps us reduce the complexity of our climate dataset by identifying the main sources of variance.
        Each component below represents a combination of temperature, rainfall, and water level that explains part of the system's behavior.
      </p>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={pcaData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="component" />
          <YAxis label={{ value: "% Variance", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="variance" fill="#3b82f6" name="Explained Variance" />
        </BarChart>
      </ResponsiveContainer>

      <div className="space-y-2 text-sm text-gray-600">
        {pcaData.map((item, index) => (
          <p key={index}>
            <strong>{item.component}:</strong> Explains {item.variance.toFixed(2)}% — {item.description}
          </p>
        ))}
      </div>

      <div className="mt-4 text-gray-700 italic text-sm">
        Cumulative Variance Explained: {total.toFixed(2)}%
      </div>
    </div>
  );
};

export default PCAAnalysis;
