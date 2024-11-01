import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-[300px] object-cover transform group-hover:scale-105 transition duration-700"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-700" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <button 
            onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
            className="bg-white text-black px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <h3 className="text-xl font-serif mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="font-semibold">${product.price}</p>
    </div>
  );
}