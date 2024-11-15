import React from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
          Discover Your Next Adventure
        </h1>
        <p className="text-xl text-white text-center mb-8 max-w-2xl">
          Explore breathtaking destinations and create unforgettable memories with our curated travel experiences
        </p>
        
        <div className="w-full max-w-3xl bg-white rounded-full shadow-lg p-2">
          <div className="flex items-center">
            <div className="flex-1 px-4">
              <input
                type="text"
                placeholder="Where would you like to go?"
                className="w-full py-2 focus:outline-none"
              />
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}