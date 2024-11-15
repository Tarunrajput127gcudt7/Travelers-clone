import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Destinations />
      <Testimonials />
      
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Wanderlust</h3>
              <p className="text-blue-200">
                Your gateway to extraordinary travel experiences and unforgettable adventures.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#destinations" className="hover:text-white">Destinations</a></li>
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white">Twitter</a>
                <a href="#" className="text-blue-200 hover:text-white">Facebook</a>
                <a href="#" className="text-blue-200 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} Wanderlust. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;