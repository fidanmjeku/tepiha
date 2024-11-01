import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Categories } from './components/Categories';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white text-black py-4' : 'bg-transparent text-white py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-serif">NOTA</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:opacity-70 transition">About</a>
            <a href="#categories" className="hover:opacity-70 transition">Categories</a>
            <a href="#collection" className="hover:opacity-70 transition">Collection</a>
            <a href="#contact" className="hover:opacity-70 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black bg-opacity-95 z-40 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-white text-2xl">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70 transition">About</a>
            <a href="#categories" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70 transition">Categories</a>
            <a href="#collection" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70 transition">Collection</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:opacity-70 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
            alt="Minimal Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-serif mb-6">Timeless Design</h1>
            <p className="text-xl md:text-2xl opacity-90">Creating spaces that inspire and endure</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <Categories />

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Our Philosophy</h2>
            <p className="text-lg text-gray-600 mb-6">We believe in the power of simplicity. Every piece in our collection is thoughtfully crafted to bring harmony to your space.</p>
            <p className="text-lg text-gray-600">Our designs embrace minimalism while maintaining warmth and character, creating environments that stand the test of time.</p>
          </div>
          <div className="relative h-[600px]">
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
              alt="Interior Design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-32 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Latest Collection</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-${1600210492486 + item}?auto=format&fit=crop&q=80`}
                  alt={`Design ${item}`}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-12">Let's create something extraordinary together</p>
          <form className="space-y-6">
            <input 
              type="text" 
              placeholder="Name"
              className="w-full px-6 py-4 bg-neutral-50 border-none focus:ring-1 focus:ring-black transition"
            />
            <input 
              type="email" 
              placeholder="Email"
              className="w-full px-6 py-4 bg-neutral-50 border-none focus:ring-1 focus:ring-black transition"
            />
            <textarea 
              placeholder="Message"
              rows={6}
              className="w-full px-6 py-4 bg-neutral-50 border-none focus:ring-1 focus:ring-black transition"
            />
            <button className="w-full bg-black text-white px-8 py-4 hover:bg-neutral-800 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="py-8 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-2xl font-serif mb-4 md:mb-0">NOTA</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:opacity-70 transition">Instagram</a>
            <a href="#" className="hover:opacity-70 transition">Pinterest</a>
            <a href="#" className="hover:opacity-70 transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;