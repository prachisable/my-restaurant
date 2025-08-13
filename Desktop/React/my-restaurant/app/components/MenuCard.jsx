// app/components/MenuCard.jsx
import React from 'react';

const MenuCard = ({ item }) => {
  const { name, description, price, image, isPopular, isSpicy, category } = item;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <div 
          className="h-48 bg-cover bg-center"
          style={{ 
            backgroundImage: image ? `url(${image})` : 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)'
          }}
        />
        {isPopular && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            <i className="fas fa-star mr-1"></i>
            Popular
          </div>
        )}
        {isSpicy && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            <i className="fas fa-fire mr-1"></i>
            Spicy
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <span className="text-xl font-bold text-green-600">₹{price}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <i className="fas fa-tag mr-1"></i>
            <span className="capitalize">{category}</span>
          </div>
          
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <i className="fas fa-plus mr-1"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;