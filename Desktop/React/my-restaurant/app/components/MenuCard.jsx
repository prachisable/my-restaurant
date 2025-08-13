// app/components/MenuCard.jsx
"use client";
import React from 'react';
import { useCart } from '../context/CartContext';

const MenuCard = ({ item }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    // Create item with id if it doesn't exist
    const itemWithId = {
      ...item,
      id: item.id || Math.random().toString(36).substr(2, 9) // Generate ID if not present
    };
    addToCart(itemWithId);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        {/* Image placeholder with gradient */}
        <div
          className="h-48 bg-cover bg-center"
          style={{
            backgroundImage: item.image ? `url(${item.image})` : 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)'
          }}
        />
        
        {/* Popular badge */}
        {item.isPopular && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            <i className="fas fa-star mr-1"></i> Popular
          </div>
        )}
        
        {/* Spicy badge */}
        {item.isSpicy && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            <i className="fas fa-fire mr-1"></i> Spicy
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
          <span className="text-xl font-bold text-green-600">₹{item.price}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <i className="fas fa-tag mr-1"></i>
            <span className="capitalize">{item.category.replace('-', ' ')}</span>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1"
          >
            <i className="fas fa-plus"></i>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;