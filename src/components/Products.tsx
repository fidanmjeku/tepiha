import React from 'react';

export function Products() {
  return (
    <section id="products" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-16">Our Collections</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="group relative overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80"
              alt="Luxury Curtains"
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-serif mb-2">Premium Curtains</h3>
              <p className="max-w-xs">Elegant drapes that transform your windows into stunning focal points</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80"
              alt="Designer Carpets"
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-serif mb-2">Designer Carpets</h3>
              <p className="max-w-xs">Hand-picked carpets that add warmth and sophistication to any room</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}