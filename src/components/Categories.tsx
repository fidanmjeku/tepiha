import React from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';

const categories = [
  {
    id: 1,
    name: 'Tepih moderne',
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80',
    description: 'Contemporary designs for modern spaces'
  },
  {
    id: 2,
    name: 'Tepih tradicionale',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80',
    description: 'Timeless patterns with cultural heritage'
  },
  {
    id: 3,
    name: 'Tepih të jashtme',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80',
    description: 'Durable carpets for outdoor living'
  },
  {
    id: 4,
    name: 'Tepih një ngjyrëshe',
    image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&q=80',
    description: 'Elegant solid colors for any room'
  },
  {
    id: 5,
    name: 'Tepih për fëmijë',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6c8e00e1fd?auto=format&fit=crop&q=80',
    description: 'Playful designs for children\'s spaces'
  },
  {
    id: 6,
    name: 'Të rrumbullakët',
    image: 'https://images.unsplash.com/photo-1600607687339-1d9f8c17c817?auto=format&fit=crop&q=80',
    description: 'Circular carpets for unique spaces'
  }
];

export function Categories() {
  return (
    <section id="categories" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-4">Our Categories</h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Explore our diverse collection of carpets, each carefully curated to match your unique style and needs
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-[300px] object-cover transform group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-700" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="bg-white text-black px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    View Collection
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-serif mb-2">{category.name}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h2 className="text-4xl font-serif text-center mb-4">Featured Products</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Browse our selection of premium carpets and find the perfect piece for your space
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}