import React, { useState } from 'react';
import { Menu, X, Plane } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Plane className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Wanderlust</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#destinations" className="text-gray-600 hover:text-blue-600">Destinations</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#destinations" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">Destinations</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">Contact</a>
            <button className="w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}