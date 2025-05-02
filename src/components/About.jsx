import React from 'react';
import { 
  Info, 
  BarChart2, 
  Map, 
  Database, 
  CloudRain, 
  Users, 
  Shield 
} from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 md:px-10">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-teal-800 mb-3">About WaterScope</h1>
        <p className="text-lg text-gray-600 mb-6">
          An interactive web system for research and monitoring of water sources in Israel and their weather-driven changes over time.
        </p>
        <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
          <p className="text-teal-700">
          WaterScope is developed by Mohammad Khateeb, and Jad Taha , a fourth-year software engineering student at Braude College. The project focuses on web application development and environmental data visualization, specifically for water resource monitoring and management.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto mb-12 bg-white rounded-lg border border-teal-100 shadow-sm p-6">
        <div className="flex items-start mb-4">
          <Info className="text-teal-600 w-6 h-6 mr-3 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-teal-800 mb-2">Our Mission</h2>
            <p className="text-gray-600">
              WaterScope aims to provide transparent, accurate data on Israel's water resources, helping researchers, policy makers, and citizens understand the impact of climate change and human activity on this precious resource. By making this data accessible and interactive, we hope to contribute to better water management decisions and increased awareness about water conservation.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-teal-800 mb-6">Key Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg border border-teal-100 shadow-sm p-5">
            <div className="flex items-center mb-3">
              <Map className="text-teal-600 w-5 h-5 mr-2" />
              <h3 className="text-lg font-medium text-teal-700">Interactive Map</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Explore water sources across Israel through an interactive map with detailed information on each location, including current capacity, status, and recent changes.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white rounded-lg border border-teal-100 shadow-sm p-5">
            <div className="flex items-center mb-3">
              <Database className="text-teal-600 w-5 h-5 mr-2" />
              <h3 className="text-lg font-medium text-teal-700">Real-Time Data</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Access up-to-the-minute data on Israel's key water sources, including capacity levels, weather conditions, and recent changes that affect water availability.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white rounded-lg border border-teal-100 shadow-sm p-5">
            <div className="flex items-center mb-3">
              <BarChart2 className="text-teal-600 w-5 h-5 mr-2" />
              <h3 className="text-lg font-medium text-teal-700">Historical Trends</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Study historical patterns and trends to understand how water sources have changed over time, with visualizations that make complex data easy to understand.
            </p>
          </div>
        </div>
      </div>
      
      {/* Data Sources & Methodology */}
      <div className="max-w-4xl mx-auto mb-12 bg-white rounded-lg border border-teal-100 shadow-sm p-6">
        <h2 className="text-xl font-semibold text-teal-800 mb-4">Data Sources & Methodology</h2>
        <p className="text-gray-600 mb-4">
          WaterScope collects and aggregates data from multiple authoritative sources to ensure accuracy and reliability:
        </p>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Needed to Update</li>
          <li>Needed to Update</li>
          <li>Needed to Update</li>
          <li>Needed to Update</li>
        </ul>
        <p className="text-gray-600 mt-4">
          Data is updated regularly and validated against historical records. Our visualizations are designed to present information clearly while maintaining scientific accuracy.
        </p>
      </div>
      
      {/* Team Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center mb-6">
          <Users className="text-teal-600 w-6 h-6 mr-2" />
          <h2 className="text-2xl font-bold text-teal-800">Our Team</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg border border-teal-100 shadow-sm p-5">
            <h3 className="text-lg font-medium text-teal-700 mb-2">Mohammad Khateeb</h3>
            <p className="text-gray-600 text-sm mb-3">
            Software Engineering
            </p>
            <p className="text-gray-500 text-sm">
            Fourth-year software engineering student at Braude College, currently in final year of study.
            </p>
          </div>
          
          {/* Team Member 2 */}
          <div className="bg-white rounded-lg border border-teal-100 shadow-sm p-5">
            <h3 className="text-lg font-medium text-teal-700 mb-2">Jad Taha</h3>
            <p className="text-gray-600 text-sm mb-3">
            Software Engineering
            </p>
            <p className="text-gray-500 text-sm">
            Fourth-year software engineering student at Braude College, currently in final year of study.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="max-w-4xl mx-auto bg-teal-50 rounded-lg p-6 border border-teal-200">
        <h2 className="text-xl font-semibold text-teal-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          Have questions or suggestions? We'd love to hear from you. Reach out to our team at:
        </p>
        <div className="flex items-center">
          <Shield className="text-teal-600 w-5 h-5 mr-2" />
          <a href="mailto:contact@waterscope.org" className="text-teal-600 hover:text-teal-800 transition">
            mhmd52kh@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;