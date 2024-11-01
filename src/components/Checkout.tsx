import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export function Checkout() {
  const { state, dispatch } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you'd send this to your backend
    const order = {
      id: Math.random().toString(36).substr(2, 9),
      items: state.items,
      total: state.total,
      customerInfo: formData,
      status: 'pending',
      createdAt: new Date(),
    };

    // Show success message
    alert(`Order placed successfully! Your order ID is ${order.id}. Our team will contact you for cash payment and delivery.`);
    
    // Clear cart
    dispatch({ type: 'CLEAR_CART' });
    
    // Redirect to home
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-serif mb-8">Checkout</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-serif mb-4">Order Summary</h2>
          {state.items.map((item) => (
            <div key={item.id} className="flex justify-between py-2">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t mt-4 pt-4">
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${state.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-serif mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Delivery Address</label>
              <textarea
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-2 border rounded"
                rows={3}
              />
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-600 mb-4">
              Payment Method: Cash on Delivery Only
            </p>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-neutral-800 transition"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}