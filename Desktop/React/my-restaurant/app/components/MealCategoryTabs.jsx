// app/components/MealCategoryTabs.jsx
import React, { useState } from 'react';

const MealCategoryTabs = ({ categories, onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || 'all');

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    if (onCategoryChange) {
      onCategoryChange(categoryId);
    }
  };

  return (
    <div className="mb-8">
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 border border-gray-200'
            }`}
          >
            <i className={`${category.icon} mr-2`}></i>
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Active category description */}
      {categories.find(cat => cat.id === activeCategory)?.description && (
        <div className="text-center mb-6">
          <p className="text-gray-600 max-w-2xl mx-auto">
            {categories.find(cat => cat.id === activeCategory).description}
          </p>
        </div>
      )}
    </div>
  );
};

export default MealCategoryTabs;