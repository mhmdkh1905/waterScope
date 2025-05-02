import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Home,
  Map,
  Database,
  TrendingUp,
  CloudRain,
  Info,
  Menu,
  X,
} from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', icon: <Home className="w-5 h-5" />, link: '/home' },
    { name: 'Map', icon: <Map className="w-5 h-5" />, link: '/map' },
    { name: 'Real-Time Data', icon: <Database className="w-5 h-5" />, link: '/realTimeData' },
    { name: 'Historical Trends', icon: <TrendingUp className="w-5 h-5" />, link: '/historicalTrends' },
    { name: 'About', icon: <Info className="w-5 h-5" />, link: '/about' },
  ];

  const isActive = (item) => {
    if (item.name === 'Home') {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname === item.link;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm py-3 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center mr-2">
            <div className="h-6 w-6 rounded-full bg-teal-400 flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-teal-300"></div>
            </div>
          </div>
          <span className="text-teal-600 font-semibold text-xl">WaterScope</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-600 hover:text-teal-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4 lg:gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link to={item.link}>
                  <div
                    className={`flex items-center px-2 py-1 text-sm md:text-base rounded-md transition-colors duration-200 ${
                      isActive(item)
                        ? 'text-teal-600 font-medium'
                        : 'text-gray-500 hover:text-teal-500'
                    }`}
                  >
                    <span className="mr-1.5">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-2 border-t border-gray-200">
          <ul className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link to={item.link} onClick={() => setIsMenuOpen(false)}>
                  <div
                    className={`flex w-full items-center px-3 py-2 rounded-md transition-colors duration-200 ${
                      isActive(item)
                        ? 'bg-teal-50 text-teal-600 font-medium'
                        : 'text-gray-500 hover:bg-gray-50 hover:text-teal-500'
                    }`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
