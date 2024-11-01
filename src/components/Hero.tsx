import React from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <header className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-5rem)] text-center text-white px-4">
        <h1 className="text-6xl font-serif mb-6">Transform Your Space</h1>
        <p className="text-xl max-w-2xl mb-8">Discover our curated collection of premium curtains and carpets</p>
        <button className="group flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition">
          Explore Collection
          <ChevronDown className="group-hover:translate-y-1 transition" />
        </button>
      </div>
    </header>
  );
}