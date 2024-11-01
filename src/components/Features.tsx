import React from 'react';
import { Star, Drapery, RugSquare } from 'lucide-react';

export function Features() {
  return (
    <section className="bg-neutral-100 py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <Star className="w-12 h-12 mx-auto mb-4 text-amber-700" />
            <h3 className="text-xl font-serif mb-2">Premium Quality</h3>
            <p className="text-neutral-600">Finest materials and craftsmanship</p>
          </div>
          <div>
            <Drapery className="w-12 h-12 mx-auto mb-4 text-amber-700" />
            <h3 className="text-xl font-serif mb-2">Custom Fitting</h3>
            <p className="text-neutral-600">Professional measurement and installation</p>
          </div>
          <div>
            <RugSquare className="w-12 h-12 mx-auto mb-4 text-amber-700" />
            <h3 className="text-xl font-serif mb-2">Expert Design</h3>
            <p className="text-neutral-600">Personalized interior design consultation</p>
          </div>
        </div>
      </div>
    </section>
  );
}