import React from 'react';
import { Drapery } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="relative z-10 flex justify-between items-center px-8 py-6">
      <div className="flex items-center gap-2 text-white">
        <Drapery className="h-8 w-8" />
        <span className="text-2xl font-serif">Elegance</span>
      </div>
      <div className="flex gap-8 text-white">
        <a href="#products" className="hover:text-gold-200 transition">Products</a>
        <a href="#gallery" className="hover:text-gold-200 transition">Gallery</a>
        <a href="#contact" className="hover:text-gold-200 transition">Contact</a>
      </div>
    </nav>
  );
}