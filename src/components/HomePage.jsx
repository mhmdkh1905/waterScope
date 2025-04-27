import React from 'react'
import { Link, useLocation } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-400 text-white text-center py-12 lg:py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">WaterScope</h1>
        <p className="text-lg mb-6">
          Exploring the Impact of Weather on Israel's Water Sources
        </p>
        <Link to="/waterMap">
        <button className="bg-white text-blue-500 font-medium py-2 px-6 rounded-full hover:bg-blue-50 transition duration-300">
          Explore Data
        </button>
        </Link>
      </header>

      {/* About Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About WaterScope</h2>
          <p className="text-gray-700">
            WaterScope is an interactive platform that provides real-time and historical insights into Israel's
            water resources, highlighting the influence of changing weather patterns and climate trends.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Real-Time Data Card */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-center">Real-Time Data</h3>
              <p className="text-gray-600 text-center">
                See the latest updates on water levels and weather.
              </p>
            </div>

            {/* Historical Trends Card */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-center">Historical Trends</h3>
              <p className="text-gray-600 text-center">
                Analyze water and climate patterns over time.
              </p>
            </div>

            {/* Interactive Map Card */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-center">Interactive Map</h3>
              <p className="text-gray-600 text-center">
                Explore water sources across Israel visually.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 px-6 flex justify-center items-center">
        <p>© 2025 Mohammad Khateeb & Jad Taha| WaterScope Project</p>
      </footer>
    </div>
  )
}
