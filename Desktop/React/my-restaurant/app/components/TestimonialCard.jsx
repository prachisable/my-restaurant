// app/components/TestimonialCard.jsx
import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  const { name, review, rating, location, avatar, date } = testimonial;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <i 
        key={index} 
        className={`fas fa-star ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      ></i>
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full">
      {/* Rating */}
      <div className="flex items-center mb-4">
        <div className="flex space-x-1 mr-3">
          {renderStars(rating)}
        </div>
        <span className="text-gray-600 text-sm">({rating}/5)</span>
      </div>

      {/* Review Text */}
      <blockquote className="text-gray-700 mb-4 italic">
        "{review}"
      </blockquote>

      {/* Customer Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
            {avatar ? (
              <img 
                src={avatar} 
                alt={name} 
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <i className="fas fa-user text-green-600 text-lg"></i>
            )}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-gray-500 text-sm">{location}</p>
          </div>
        </div>
        
        {date && (
          <div className="text-gray-400 text-sm">
            <i className="fas fa-calendar-alt mr-1"></i>
            {date}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;